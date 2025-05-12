<template>
  <RadioGroupRoot v-model="selected" class="flex gap-6">
    <AudioPlayerCard
      v-for="opt in options"
      :key="opt.label"
      :option="opt"
      :is-active="selected === opt.label"
      :is-playing="
        isPlaying && currentPreview === audioMap[opt.label]?.previewUrl
      "
      :preview-url="audioMap[opt.label]?.previewUrl ?? null"
      :artwork-url="audioMap[opt.label]?.artworkUrl ?? null"
      :progress="progress"
      :duration="duration"
      @toggle-playback="() => togglePlayback(opt.label)"
      @seek-audio="seekAudio"
    />
  </RadioGroupRoot>
  <audio
    ref="audioElement"
    class="hidden"
    @timeupdate="updateProgress"
    @ended="onAudioEnded"
  />
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from "vue";
import { RadioGroupRoot } from "radix-vue";
import AudioPlayerCard from "./AudioPlayerCard.vue";

const props = defineProps<{
  options: {
    label: string;
    artist: string;
    searchTerm: string;
    scores: string[];
  }[];
}>();

const emit = defineEmits<{
  (e: "select", scores: string[]): void;
}>();

const selected = ref("");
const currentPreview = ref<string | null>(null);
const isPlaying = ref(false);
const audioElement = ref<HTMLAudioElement | null>(null);
const progress = ref(0);
const duration = ref(0);

const audioMap = ref<
  Record<string, { previewUrl: string | null; artworkUrl: string | null }>
>({});

const togglePlayback = (label: string) => {
  const preview = audioMap.value[label]?.previewUrl;
  if (!preview) return;

  if (currentPreview.value === preview && isPlaying.value) {
    audioElement.value?.pause();
    isPlaying.value = false;
  } else {
    currentPreview.value = preview;
    nextTick(() => {
      if (audioElement.value) {
        audioElement.value.src = preview;
        audioElement.value
          .play()
          .then(() => {
            isPlaying.value = true;
            duration.value = audioElement.value?.duration || 0;
          })
          .catch(() => {});
      }
    });
  }
};

const stopAudio = () => {
  if (audioElement.value) {
    audioElement.value.pause();
    audioElement.value.currentTime = 0;
    isPlaying.value = false;
  }
};

const updateProgress = () => {
  if (audioElement.value) {
    progress.value = audioElement.value.currentTime;
    duration.value = audioElement.value.duration;
  }
};

const seekAudio = () => {
  if (audioElement.value) {
    audioElement.value.currentTime = progress.value;
  }
};

const onAudioEnded = () => {
  isPlaying.value = false;
  progress.value = 0;
};

const loadAudioMap = async () => {
  for (const opt of props.options) {
    try {
      const res = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(
          opt.searchTerm
        )}&entity=song&limit=1`
      );
      const data = await res.json();
      const result = data.results?.[0];
      audioMap.value[opt.label] = {
        previewUrl: result?.previewUrl || null,
        artworkUrl: result?.artworkUrl100 || null,
      };
    } catch {
      audioMap.value[opt.label] = { previewUrl: null, artworkUrl: null };
    }
  }
};

watch(selected, (value) => {
  const match = props.options.find((opt) => opt.label === value);
  if (match) emit("select", match.scores);
});

watch(
  () => props.options,
  () => {
    selected.value = "";
    currentPreview.value = null;
    stopAudio();
    loadAudioMap();
  }
);

onMounted(loadAudioMap);
</script>

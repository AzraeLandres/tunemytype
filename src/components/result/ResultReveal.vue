<template>
  <DialogRoot>
    <DialogDescription id="reveal-description" class="sr-only">
      Audio preview and contact link
    </DialogDescription>

    <DialogTrigger as-child>
      <button
        class="bg-primary text-white font-bold px-6 py-3 rounded-full shadow hover:bg-primary/90 transition"
      >
        Reveal your ultimate type
      </button>
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
      <DialogContent
        aria-describedby="reveal-description"
        class="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-window rounded-xl shadow-lg p-6 max-w-md w-full text-center bg-black/60"
      >
        <DialogTitle class="text-2xl text-primary mb-4 font-bold">
          It's me! The man for the job!
        </DialogTitle>

        <div class="flex flex-col items-center justify-center gap-4">
          <img src="/AzraeLandres.png" alt="My photo" class="w-40 h-40" />

          <a
            href="https://www.linkedin.com/in/azraellandres"
            target="_blank"
            class="inline-block mt-2 text-sm text-white bg-aqua px-4 py-2 rounded-full hover:bg-blue transition"
          >
            🔗 Visit my LinkedIn
          </a>
        </div>

        <DialogClose
          class="absolute top-2 right-2 text-black hover:text-primary text-lg"
        >
          ✖
        </DialogClose>
      </DialogContent>
    </DialogPortal>

    <audio
      ref="audioElement"
      class="hidden"
      @timeupdate="updateProgress"
      @ended="onAudioEnded"
    ></audio>
  </DialogRoot>
</template>

<script setup lang="ts">
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "radix-vue";
import { ref, onMounted } from "vue";

const previewUrl = ref(
  "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9a/26/91/9a26914f-d4a3-c25d-5e6e-3141a25e267c/mzaf_16579830757373917249.plus.aac.p.m4a"
);
const isPlaying = ref(false);
const progress = ref(0);
const duration = ref(30);
const audioElement = ref<HTMLAudioElement | null>(null);

onMounted(() => {
  if (audioElement.value) {
    audioElement.value.src = previewUrl.value;
  }
});

const toggle = () => {
  if (!audioElement.value) return;
  if (isPlaying.value) {
    audioElement.value.pause();
  } else {
    audioElement.value.play().catch(() => {});
  }
  isPlaying.value = !isPlaying.value;
};

const seek = (val: number) => {
  if (audioElement.value) {
    audioElement.value.currentTime = val;
    progress.value = val;
  }
};

const updateProgress = () => {
  if (audioElement.value) {
    progress.value = audioElement.value.currentTime;
    duration.value = audioElement.value.duration;
  }
};

const onAudioEnded = () => {
  isPlaying.value = false;
  progress.value = 0;
};
</script>

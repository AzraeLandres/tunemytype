<template>
  <RadioGroupItem
    :value="option.label"
    class="bg-white rounded-xl px-4 py-6 shadow-custom w-64 flex flex-col items-center gap-4"
  >
    <!-- Cover -->
    <img
      v-if="artworkUrl"
      :src="artworkUrl"
      alt="Album cover"
      class="rounded-md w-40 h-40 shadow-custom"
    />

    <!-- Title and Artist -->
    <section class="flex flex-col items-start gap-1 w-full">
      <p class="text-base font-bold">{{ option.label }}</p>
      <p class="text-sm text-gray-600 italic">{{ option.artist }}</p>
    </section>

    <section v-if="previewUrl" class="flex items-center gap-2 w-full">
      <button
        @click.stop="$emit('toggle-playback')"
        :aria-label="isPlaying ? 'Pause preview' : 'Play preview'"
        class="bg-transparent text-primary p-2 rounded-full transition cursor-pointer"
      >
        <component :is="isPlaying ? Pause : Play" class="w-5 h-5" />
      </button>

      <input
        type="range"
        min="0"
        :max="duration"
        step="0.1"
        :value="isPlaying ? progress : 0"
        @input="$emit('seek-audio', $event.target.value)"
        class="custom-slider w-full"
      />
    </section>
  </RadioGroupItem>
</template>

<script setup lang="ts">
import { RadioGroupItem } from "radix-vue";
import { Play, Pause } from "lucide-vue-next";
const props = defineProps<{
  option: {
    label: string;
    artist: string;
    searchTerm: string;
    scores: string[];
  };
  isActive: boolean;
  isPlaying: boolean;
  artworkUrl: string | null;
  previewUrl: string | null;
  progress: number;
  duration: number;
}>();
</script>

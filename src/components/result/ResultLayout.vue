<template>
  <div
    class="bg-background grid grid-cols-1 md:grid-cols-2 gap-8 bg-window p-8 rounded-xl shadow-custom max-w-5xl mx-auto"
  >
    <!-- LEFT: Emoji + Title + Catchphrases + CTA -->
    <div class="flex flex-col items-center gap-4">
      <div class="text-7xl">{{ profile.emoji }}</div>

      <!-- Profile title -->
      <h2 class="text-xl font-bold text-primary">{{ profile.title }}</h2>

      <ul class="text-left text-sm space-y-2 mt-4">
        <li
          v-for="line in profile.catchphrases"
          :key="line"
          class="bg-primary text-white rounded-full px-3 py-1 shadow"
        >
          {{ line }}
        </li>
      </ul>

      <!-- CTA Modale -->
      <div class="mt-4">
        <ResultReveal />
      </div>
    </div>

    <!-- RIGHT: Strengths & Weaknesses -->
    <div class="flex flex-col gap-6 text-sm text-left">
      <section>
        <h3 class="text-md font-bold border-b border-black mb-2">STRENGTHS</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li v-for="item in profile.strengths" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section>
        <h3 class="text-md font-bold border-b border-black mb-2">WEAKNESSES</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li v-for="item in profile.weaknesses" :key="item">{{ item }}</li>
        </ul>
      </section>

      <div class="mt-6 text-center italic text-gray-600">
        "Peace and pajamas, that's the dream. ✨"
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { profiles } from "@data/profiles";
import ResultReveal from "@components/result/ResultReveal.vue";

const route = useRoute();
const resultId = route.params.id as keyof typeof profiles;

const profile = computed(
  () =>
    profiles[resultId] || {
      emoji: "❓",
      title: "Unknown",
      catchphrases: [],
      strengths: [],
      weaknesses: [],
    }
);
</script>

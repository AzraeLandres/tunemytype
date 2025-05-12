<template>
  <div
    class="bg-window border border-black rounded-pixel shadow-lg p-6 text-center font-pixel max-w-xl mx-auto"
  >
    <h2 class="text-2xl font-bold text-primary mb-4">{{ title }}</h2>
    <p class="text-lg text-black">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  resultId: string;
}>();

import { profiles } from "../../data/profiles";

const { title, description } = profiles[props.resultId] || {
  title: "Profil inconnu",
  description: "Aucun profil ne correspond à vos réponses.",
};
</script>

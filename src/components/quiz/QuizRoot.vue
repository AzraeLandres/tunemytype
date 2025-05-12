<template>
  <div class="w-full max-w-3xl mx-auto flex flex-col gap-8">
    <h2 class="text-2xl font-bold text-center font-pixel">
      {{ currentQuestion.title }}
    </h2>
    <QuizOption :options="currentQuestion.options" @select="handleSelect" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import QuizOption from "./QuizOption.vue";
import { questions } from "../../data/questions";

const currentIndex = ref(0);
const scores = ref<Record<string, number>>({});

const currentQuestion = computed(() => questions[currentIndex.value]);

function handleSelect(optionScores: string[]) {
  optionScores.forEach((id) => {
    scores.value[id] = (scores.value[id] || 0) + 1;
  });

  if (currentIndex.value < questions.length - 1) {
    currentIndex.value++;
  } else {
    const sorted = Object.entries(scores.value).sort((a, b) => b[1] - a[1]);
    const topProfile = sorted[0]?.[0] || null;
    emit("finish", topProfile);
  }
}

const emit = defineEmits<{
  (e: "finish", result: string): void;
}>();
</script>

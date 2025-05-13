<template>
  <div
    class="bg-gradient-to-br from-primary via-teal to-yellow min-h-screen flex items-center justify-center"
  >
    <ResultCard v-if="result" :result-id="result" />
    <QuizRoot v-else @finish="handleResult" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import QuizRoot from "@components/quiz/QuizRoot.vue";
import ResultCard from "@components/quiz/ResultCard.vue";

const result = ref<string | null>(null);

function handleResult(profileId: string) {
  result.value = profileId;
}
</script>

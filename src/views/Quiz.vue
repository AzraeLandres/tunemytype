<template>
  <div class="bg-background min-h-screen flex items-center justify-center">
    <QuizRoot @finish="handleResult" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import QuizRoot from "@components/quiz/QuizRoot.vue";
import { useRouter } from "vue-router";
const result = ref<string | null>(null);

const router = useRouter();
const handleResult = (profileId: string) => {
  router.push({
    name: "Result",
    params: { id: profileId },
  });
};
</script>

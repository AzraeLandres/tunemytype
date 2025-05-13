<template>
  <div class="bg-background min-h-screen flex items-center justify-center">
    <ResultLayout :result-id="resultId" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import ResultLayout from "@components/result/ResultLayout.vue";

const route = useRoute();
const resultId = route.params.id as string;
</script>

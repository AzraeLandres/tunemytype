<template>
  <ResultCard :result-id="id" />
</template>

<script setup lang="ts">
import ResultCard from "@components/quiz/ResultCard.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id as string;
</script>

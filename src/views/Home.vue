<template>
  <div
    class="min-h-screen bg-gradient-to-br from-primary via-teal to-yellow text-white flex flex-col items-center justify-center gap-6"
  >
    <!-- Titre -->
    <h1 class="text-4xl text-center drop-shadow-md">TuneMyType</h1>

    <!-- Sous-titre -->
    <p class="text-lg md:text-xl text-center mb-2 max-w-xl">
      Discover what kind of collaborator you are… through music.
    </p>

    <!-- Bouton Radix Vue accessible -->
    <Slot>
      <RouterLink to="/quiz">
        <Primitive
          as="button"
          class="bg-white text-primary font-bold text-lg px-8 py-4 rounded-full shadow-custom transition hover:scale-105 hover:bg-primary hover:text-white flex items-center gap-3"
        >
          <Play class="w-5" /> Start the Quiz
        </Primitive>
      </RouterLink>
    </Slot>
  </div>
</template>

<script setup lang="ts">
import { Primitive, Slot } from "radix-vue";
import { Play } from "lucide-vue-next";
</script>

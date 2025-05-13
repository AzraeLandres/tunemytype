<template>
  <div
    class="rounded-xl shadow-custom p-6 text-center max-w-xl mx-auto relative overflow-hidden"
  >
    <!-- Background -->
    <div
      class="absolute inset-0 z-0 bg-gradient-to-br pointer-events-none"
      :class="profile?.bg"
    ></div>

    <!-- content -->
    <div class="relative z-10" :class="profile?.textColor">
      <div class="text-5xl mb-2">{{ profile?.emoji || "❓" }}</div>

      <h2 class="text-2xl font-bold mb-2">
        {{ profile?.title || "Unknown Type" }}
      </h2>

      <div
        class="inline-block mb-4 text-xs uppercase tracking-wider bg-black text-white px-3 py-1 rounded-full shadow"
      >
        {{ resultId }}
      </div>

      <p class="text-md leading-relaxed">
        {{ profile?.description || "This profile doesn't exist yet!" }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { profiles } from "@data/profiles";

const props = defineProps<{ resultId: string }>();

const profile = computed(() => profiles[props.resultId]);
</script>

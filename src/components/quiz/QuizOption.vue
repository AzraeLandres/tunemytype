<template>
  <RadioGroupRoot v-model="selected" class="flex flex-col gap-4">
    <RadioGroupItem
      v-for="opt in options"
      :key="opt.label"
      :value="opt.label"
      class="group px-4 py-3 font-pixel rounded-pixel border border-black shadow-pixel transition cursor-pointer bg-window text-black hover:bg-primary/10 data-[state=checked]:bg-primary data-[state=checked]:text-white"
    >
      <div class="flex items-center justify-between">
        <span>{{ opt.label }}</span>
        <RadioGroupIndicator>
          <span class="ml-2">✔</span>
        </RadioGroupIndicator>
      </div>
    </RadioGroupItem>
  </RadioGroupRoot>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  options: { label: string; scores: string[] }[];
}>();

const emit = defineEmits<{
  (e: "select", scores: string[]): void;
}>();

const selected = ref("");

watch(selected, (value) => {
  const found = props.options.find((opt) => opt.label === value);
  if (found) {
    emit("select", found.scores);
    selected.value = "";
  }
});
</script>

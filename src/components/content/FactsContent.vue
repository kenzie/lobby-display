<template>
  <div class="h-full flex items-center justify-center">
    <div v-if="data.size === 'small'" class="text-center">
      <div class="text-lg">{{ data.fact.text }}</div>
    </div>
    <div v-else-if="data.size === 'medium'" class="text-center space-y-3">
      <div class="text-xl font-bold">Did You Know?</div>
      <div class="text-lg">{{ data.fact.text }}</div>
    </div>
    <div v-else class="space-y-4">
      <div class="text-2xl font-bold text-center">Fun Facts</div>
      <div v-for="fact in data.facts" :key="fact.id" class="space-y-2 text-center">
        <div class="text-lg">{{ fact.text }}</div>
        <div class="text-xs text-gray-300">{{ fact.category }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: any
}

defineProps<Props>()
</script>
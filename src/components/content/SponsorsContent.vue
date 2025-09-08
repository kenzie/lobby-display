<template>
  <div class="h-full flex items-center justify-center">
    <div v-if="data.size === 'small'" class="text-center">
      <div class="text-2xl font-bold">{{ data.sponsor.name }}</div>
    </div>
    <div v-else-if="data.size === 'medium'" class="text-center space-y-4">
      <div class="text-3xl font-bold">{{ data.sponsor.name }}</div>
      <div class="text-sm">{{ data.sponsor.tagline }}</div>
    </div>
    <div v-else class="text-center space-y-6">
      <div class="text-4xl font-bold">{{ data.sponsor.name }}</div>
      <div class="text-lg">{{ data.sponsor.tagline }}</div>
      <div class="text-sm text-gray-300">{{ data.sponsor.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: any
}

defineProps<Props>()
</script>
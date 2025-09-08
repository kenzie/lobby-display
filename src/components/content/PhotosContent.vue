<template>
  <div class="h-full">
    <div v-if="data.size === 'small'" class="text-center">
      <div class="text-lg font-bold">{{ data.photo.caption }}</div>
      <div class="text-sm text-gray-300">{{ data.photo.year }}</div>
    </div>
    <div v-else-if="data.size === 'medium'" class="space-y-2">
      <div class="text-xl font-bold">Team Memories</div>
      <div class="text-lg">{{ data.photo.caption }}</div>
      <div class="text-sm text-gray-300">{{ data.photo.description }}</div>
    </div>
    <div v-else class="space-y-4">
      <div class="text-2xl font-bold">Historic Moments</div>
      <div v-for="photo in data.photos" :key="photo.id" class="space-y-1">
        <div class="text-lg font-bold">{{ photo.caption }}</div>
        <div class="text-sm text-gray-300">{{ photo.year }} - {{ photo.description }}</div>
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
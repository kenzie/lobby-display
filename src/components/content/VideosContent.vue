<template>
  <div class="h-full bg-gradient-to-br from-blue-900 to-blue-700 text-white p-4 relative overflow-hidden">
    <div v-if="size === 'small'" class="flex items-center justify-between h-full">
      <div class="flex-1">
        <h3 class="text-lg font-bold truncate">{{ data.title }}</h3>
        <p class="text-sm text-blue-200">{{ data.duration }}</p>
      </div>
      <div class="w-16 h-10 bg-blue-800 rounded flex items-center justify-center">
        <span class="text-2xl">▶</span>
      </div>
    </div>

    <div v-else-if="size === 'medium'" class="h-full flex flex-col">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-xl font-bold">{{ data.title }}</h3>
        <span class="text-sm bg-blue-800 px-2 py-1 rounded">{{ data.duration }}</span>
      </div>
      <div class="flex-1 bg-blue-800 rounded-lg flex items-center justify-center relative">
        <span class="text-4xl mb-2">▶</span>
        <div class="absolute bottom-2 left-2 right-2">
          <p class="text-sm text-blue-200">{{ data.description }}</p>
        </div>
      </div>
    </div>

    <div v-else class="h-full flex flex-col">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-2xl font-bold">{{ data.title }}</h3>
        <span class="text-lg bg-blue-800 px-3 py-1 rounded">{{ data.duration }}</span>
      </div>
      <div class="flex-1 bg-blue-800 rounded-lg flex flex-col items-center justify-center relative">
        <span class="text-6xl mb-4">▶</span>
        <div class="absolute bottom-4 left-4 right-4">
          <p class="text-blue-200 mb-2">{{ data.description }}</p>
          <div class="flex justify-between text-sm text-blue-300">
            <span>{{ data.date }}</span>
            <span>{{ data.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size: 'small' | 'medium' | 'large'
  data: any
}>()
</script>
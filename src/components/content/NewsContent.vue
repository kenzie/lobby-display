<template>
  <div class="h-full">
    <div v-if="data.size === 'small'" class="text-lg">
      {{ data.headline }}
    </div>
    <div v-else-if="data.size === 'medium'" class="space-y-2">
      <div class="text-xl font-bold">Latest News</div>
      <div class="text-sm">{{ data.headline }}</div>
      <div class="text-xs text-gray-300">{{ data.summary }}</div>
    </div>
    <div v-else class="space-y-3">
      <div class="text-2xl font-bold">Team News</div>
      <div v-for="article in data.articles" :key="article.id" class="space-y-1">
        <div class="text-sm font-bold">{{ article.headline }}</div>
        <div class="text-xs text-gray-300">{{ article.summary }}</div>
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
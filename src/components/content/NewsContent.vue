<template>
  <div class="text-slate-100" style="padding: 8px 16px;">
    <div v-if="size === 'small'" class="flex items-center justify-center">
      <div class="text-center">
        <div class="text-lg font-semibold text-white">{{ data.headline }}</div>
      </div>
    </div>
    <div v-else-if="size === 'medium'" class="space-y-3">
      <div class="bg-slate-700/30 rounded-md p-3 border border-slate-600">
        <div class="text-sm font-semibold text-white mb-2">{{ data.headline }}</div>
        <div class="text-xs text-slate-300">{{ data.summary }}</div>
      </div>
    </div>
    <div v-else class="space-y-2">
      <div v-for="article in data.articles" :key="article.id" class="bg-slate-700/20 rounded-md p-3 border border-slate-600/50">
        <div class="text-sm font-semibold text-white mb-1">{{ article.headline }}</div>
        <div class="text-xs text-slate-300">{{ article.summary }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: any
  size: 'small' | 'medium' | 'large'
}

defineProps<Props>()
</script>
<template>
  <div class="flex items-center justify-center text-slate-100" style="padding: 8px 16px;">
    <div v-if="size === 'small'" class="text-center">
      <div class="text-2xl font-bold text-white">{{ data.sponsor.name }}</div>
    </div>
    <div v-else-if="size === 'medium'" class="text-center space-y-4 bg-slate-700/30 rounded-md p-6 border border-slate-600">
      <div class="text-3xl font-bold text-white">{{ data.sponsor.name }}</div>
      <div class="text-base text-slate-300">{{ data.sponsor.tagline }}</div>
    </div>
    <div v-else class="text-center space-y-6 bg-slate-700/20 rounded-md p-8 border border-slate-600/50">
      <div class="text-4xl font-bold text-white">{{ data.sponsor.name }}</div>
      <div class="text-xl text-blue-400">{{ data.sponsor.tagline }}</div>
      <div class="text-base text-slate-300 max-w-md mx-auto">{{ data.sponsor.description }}</div>
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
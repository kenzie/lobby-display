<template>
  <div class="flex items-center justify-center text-slate-100" style="padding: 8px 16px;">
    <div v-if="size === 'small'" class="text-center">
      <div class="text-lg text-white">{{ data.fact.text }}</div>
    </div>
    <div v-else-if="size === 'medium'" class="text-center space-y-3 bg-slate-700/30 rounded-md p-4 border border-slate-600">
      <div class="text-xl font-bold text-white">Did You Know?</div>
      <div class="text-base text-slate-300">{{ data.fact.text }}</div>
    </div>
    <div v-else class="space-y-3 w-full">
      <div class="text-xl font-bold text-center text-white mb-4">Fun Facts</div>
      <div v-for="fact in data.facts" :key="fact.id" class="bg-slate-700/20 rounded-md p-3 border border-slate-600/50 text-center space-y-2">
        <div class="text-base text-white">{{ fact.text }}</div>
        <div class="text-xs text-blue-400">{{ fact.category }}</div>
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
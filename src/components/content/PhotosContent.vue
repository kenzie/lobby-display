<template>
  <div class="text-slate-100" style="padding: 8px 16px;">
    <div v-if="size === 'small'" class="flex flex-col justify-center text-center">
      <div class="text-lg font-semibold text-white mb-1">{{ data.photo.caption }}</div>
      <div class="text-sm text-blue-400">{{ data.photo.year }}</div>
    </div>
    <div v-else-if="size === 'medium'" class="space-y-3">
      <div class="text-lg font-semibold text-white mb-2">Team Memories</div>
      <div class="bg-slate-700/30 rounded-md p-3 border border-slate-600 text-center space-y-2">
        <div class="text-lg font-semibold text-white">{{ data.photo.caption }}</div>
        <div class="text-sm text-slate-300">{{ data.photo.description }}</div>
        <div class="text-xs text-blue-400">{{ data.photo.year }}</div>
      </div>
    </div>
    <div v-else class="space-y-2">
      <div class="text-xl font-bold text-white mb-3">Historic Moments</div>
      <div v-for="photo in data.photos" :key="photo.id" class="bg-slate-700/20 rounded-md p-3 border border-slate-600/50 space-y-2">
        <div class="text-lg font-semibold text-white">{{ photo.caption }}</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-slate-300">{{ photo.description }}</div>
          <div class="text-xs text-blue-400">{{ photo.year }}</div>
        </div>
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
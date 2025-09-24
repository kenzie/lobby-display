<template>
  <div class="text-slate-100 py-1 px-4 h-full">
    <div v-if="size === 'small'" class="flex flex-col justify-center text-center h-full">
      <div class="text-xs font-semibold text-white mb-1">#{{ data.player.number }} {{ data.player.name }}</div>
      <div class="text-xs text-blue-400 mb-1">{{ data.player.position }}</div>
      <div class="text-xs text-slate-300">{{ data.player.height }}, {{ data.player.weight }}lbs</div>
      <div class="text-xs text-slate-400">{{ data.player.hometown }}</div>
    </div>
    <div v-else-if="size === 'medium'" class="flex flex-col h-full gap-4 pb-4">
      <div v-for="player in data.players" :key="player.id" class="bg-slate-700/30 rounded-md p-3 text-center space-y-1 flex-1 flex flex-col justify-center">
        <div class="text-xs font-semibold text-white">#{{ player.number }} {{ player.name }}</div>
        <div class="text-xs text-slate-300">{{ player.position }} • {{ player.hometown }}</div>
        <div class="text-xs text-blue-400">{{ player.stats }}</div>
      </div>
    </div>
    <div v-else class="flex flex-col h-full gap-4 pb-4">
      <div v-for="player in data.players" :key="player.id" class="bg-slate-700/20 rounded-md p-2 flex-1 flex flex-col justify-center min-h-0">
        <div class="text-xs font-semibold text-white">#{{ player.number }} {{ player.name }}</div>
        <div class="text-xs text-slate-300">{{ player.position }} • {{ player.hometown }}</div>
        <div class="text-xs text-slate-400">{{ player.bio }}</div>
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
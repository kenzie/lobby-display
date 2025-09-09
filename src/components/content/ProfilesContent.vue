<template>
  <div class="text-slate-100" style="padding: 8px 16px;">
    <div v-if="size === 'small'" class="flex flex-col justify-center text-center">
      <div class="text-lg font-semibold text-white mb-1">#{{ data.player.number }} {{ data.player.name }}</div>
      <div class="text-sm text-blue-400">{{ data.player.position }}</div>
    </div>
    <div v-else-if="size === 'medium'" class="space-y-3">
      <div class="text-lg font-semibold text-white mb-2">Player Spotlight</div>
      <div class="bg-slate-700/30 rounded-md p-3 border border-slate-600 text-center space-y-2">
        <div class="text-lg font-semibold text-white">#{{ data.player.number }} {{ data.player.name }}</div>
        <div class="text-sm text-slate-300">{{ data.player.position }} • {{ data.player.hometown }}</div>
        <div class="text-xs text-blue-400">{{ data.player.stats }}</div>
      </div>
    </div>
    <div v-else class="space-y-2">
      <div class="text-xl font-bold text-white mb-3">Player Profiles</div>
      <div v-for="player in data.players" :key="player.id" class="bg-slate-700/20 rounded-md p-3 border border-slate-600/50 space-y-2">
        <div class="text-lg font-semibold text-white">#{{ player.number }} {{ player.name }}</div>
        <div class="text-sm text-slate-300">{{ player.position }} • {{ player.hometown }}</div>
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
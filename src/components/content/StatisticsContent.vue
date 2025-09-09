<template>
  <div class="text-slate-100" style="padding: 8px 16px;">
    <div v-if="size === 'small'" class="flex flex-col justify-center">
      <div class="text-base font-medium text-slate-300 mb-1">Top Scorer</div>
      <div class="text-lg font-semibold text-white">{{ data.topScorer.name }}</div>
      <div class="text-sm text-blue-400">({{ data.topScorer.points }} pts)</div>
    </div>
    <div v-else-if="size === 'medium'" class="space-y-3">
      <div class="text-lg font-semibold text-white mb-2">Team Leaders</div>
      <div class="bg-slate-700/30 rounded-md p-3 border border-slate-600 space-y-2">
        <div class="flex justify-between">
          <span class="text-slate-300">Goals:</span>
          <span class="text-white font-medium">{{ data.leaders.goals.name }} ({{ data.leaders.goals.value }})</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-300">Assists:</span>
          <span class="text-white font-medium">{{ data.leaders.assists.name }} ({{ data.leaders.assists.value }})</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-300">Points:</span>
          <span class="text-white font-medium">{{ data.leaders.points.name }} ({{ data.leaders.points.value }})</span>
        </div>
      </div>
    </div>
    <div v-else class="space-y-2">
      <div class="text-xl font-bold text-white mb-3">Player Statistics</div>
      <div v-for="player in data.players" :key="player.name" class="bg-slate-700/20 rounded-md p-3 border border-slate-600/50">
        <div class="flex justify-between items-center">
          <span class="font-semibold text-white">{{ player.name }}</span>
          <span class="text-slate-300">{{ player.goals }}G {{ player.assists }}A {{ player.points }}P</span>
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
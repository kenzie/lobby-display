<template>
  <div class="h-full">
    <div v-if="data.size === 'small'" class="text-lg">
      Top Scorer: {{ data.topScorer.name }} ({{ data.topScorer.points }})
    </div>
    <div v-else-if="data.size === 'medium'" class="space-y-2">
      <div class="text-xl font-bold">Team Leaders</div>
      <div class="text-sm">Goals: {{ data.leaders.goals.name }} ({{ data.leaders.goals.value }})</div>
      <div class="text-sm">Assists: {{ data.leaders.assists.name }} ({{ data.leaders.assists.value }})</div>
      <div class="text-sm">Points: {{ data.leaders.points.name }} ({{ data.leaders.points.value }})</div>
    </div>
    <div v-else class="space-y-3">
      <div class="text-2xl font-bold">Player Statistics</div>
      <div v-for="player in data.players" :key="player.name" class="flex justify-between text-sm">
        <span>{{ player.name }}</span>
        <span>{{ player.goals }}G {{ player.assists }}A {{ player.points }}P</span>
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
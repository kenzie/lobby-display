<template>
  <div class="h-full">
    <div v-if="data.size === 'small'" class="text-lg">
      Next: {{ data.nextGame.opponent }} - {{ data.nextGame.time }}
    </div>
    <div v-else-if="data.size === 'medium'" class="space-y-2">
      <div class="text-xl font-bold">Upcoming Games</div>
      <div v-for="game in data.upcomingGames.slice(0, 3)" :key="game.id" class="text-sm">
        {{ game.date }} vs {{ game.opponent }} - {{ game.time }}
      </div>
    </div>
    <div v-else class="space-y-3">
      <div class="text-2xl font-bold">Full Schedule</div>
      <div v-for="game in data.upcomingGames" :key="game.id" class="flex justify-between text-sm">
        <span>{{ game.date }} vs {{ game.opponent }}</span>
        <span>{{ game.time }}</span>
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
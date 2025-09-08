<template>
  <div class="h-full">
    <div v-if="data.size === 'small'" class="text-lg">
      Last: {{ data.lastGame.result }} vs {{ data.lastGame.opponent }}
    </div>
    <div v-else-if="data.size === 'medium'" class="space-y-2">
      <div class="text-xl font-bold">Recent Results</div>
      <div v-for="game in data.recentGames.slice(0, 3)" :key="game.id" class="text-sm">
        {{ game.date }} {{ game.result }} {{ game.opponent }}
      </div>
    </div>
    <div v-else class="space-y-3">
      <div class="text-2xl font-bold">Season Results</div>
      <div v-for="game in data.recentGames" :key="game.id" class="flex justify-between text-sm">
        <span>{{ game.date }} vs {{ game.opponent }}</span>
        <span class="font-bold">{{ game.result }}</span>
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
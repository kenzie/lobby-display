<template>
  <div class="text-slate-100" style="padding: 8px 16px;">
    <div v-if="size === 'small'" class="flex flex-col justify-center">
      <div class="text-base font-medium text-slate-300 mb-1">Last Game</div>
      <div class="text-lg font-semibold text-white">{{ data.lastGame.result }} vs {{ data.lastGame.opponent }}</div>
    </div>
    <div v-else-if="size === 'medium'" class="space-y-3">
      <div class="text-lg font-semibold text-white mb-2">Recent Results</div>
      <div v-for="game in data.recentGames.slice(0, 3)" :key="game.id" class="bg-slate-700/30 rounded-md p-3 border border-slate-600">
        <div class="flex justify-between items-center">
          <div>
            <div class="font-semibold text-white">{{ game.result }} vs {{ game.opponent }}</div>
            <div class="text-sm text-slate-300">{{ game.date }}</div>
          </div>
          <div class="text-sm text-slate-400">{{ game.location }}</div>
        </div>
      </div>
    </div>
    <div v-else class="space-y-2">
      <div class="text-xl font-bold text-white mb-3">Season Results</div>
      <div v-for="game in data.recentGames" :key="game.id" class="bg-slate-700/20 rounded-md p-3 border border-slate-600/50">
        <div class="flex justify-between items-center">
          <div>
            <div class="font-semibold text-white">{{ game.date }} vs {{ game.opponent }}</div>
            <div class="text-sm text-slate-400">{{ game.location }}</div>
          </div>
          <div class="font-bold text-white">{{ game.result }}</div>
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
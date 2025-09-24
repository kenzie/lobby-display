<template>
  <div class="text-slate-100 py-1 px-4">
    <div v-if="size === 'small'" class="flex flex-col justify-center">
      <div class="text-xs font-medium text-slate-300 mb-1">Last Game</div>
      <div class="text-xs font-semibold text-white">{{ data.lastGame.result }} vs {{ data.lastGame.opponent }}</div>
    </div>
    <div v-else-if="size === 'medium'" class="flex flex-col h-full gap-4 pb-4">
      <div v-for="game in data.recentGames.slice(0, 4)" :key="game.id" class="bg-slate-700/30 rounded-md p-3 flex-1 flex items-center">
        <div class="flex justify-between items-center w-full">
          <div>
            <div class="font-semibold text-white">{{ game.result }} vs {{ game.opponent }}</div>
            <div class="text-xs text-slate-300">{{ game.date }}</div>
          </div>
          <div class="text-xs text-slate-400">{{ game.location }}</div>
        </div>
      </div>
    </div>
    <div v-else class="space-y-2">
      <div class="text-xs font-bold text-white mb-2">Season Results</div>
      <div v-for="game in data.recentGames" :key="game.id" class="bg-slate-700/20 rounded-md p-3">
        <div class="flex justify-between items-center">
          <div>
            <div class="font-semibold text-white">{{ game.date }} vs {{ game.opponent }}</div>
            <div class="text-xs text-slate-400">{{ game.location }}</div>
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
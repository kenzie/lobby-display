<template>
  <div class="text-slate-100" style="padding: 8px 16px;">
    <div v-if="size === 'small'" class="text-center">
      <div class="text-lg font-semibold text-white mb-1">{{ data.nextGame.opponent }}</div>
      <div class="text-sm text-slate-400 mb-2">Next Game</div>
      <div class="inline-flex items-center px-2 py-1 rounded text-xs font-medium" 
           style="background-color: #059669; color: #ecfdf5;">
        {{ data.nextGame.time }}
      </div>
    </div>
    
    <div v-else-if="size === 'medium'">
      <div class="space-y-3">
        <div v-for="game in data.upcomingGames.slice(0, 3)" :key="game.id" 
             class="rounded-lg p-3 border" style="background-color: #374151; border-color: #4b5563;">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-semibold text-white">{{ game.opponent }}</div>
              <div class="text-sm text-slate-300">{{ game.date }}</div>
            </div>
            <div class="inline-flex items-center px-2 py-1 rounded text-xs font-medium" 
                 style="background-color: #1e40af; color: #dbeafe;">
              {{ game.time }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="space-y-2">
        <div v-for="game in data.upcomingGames" :key="game.id" 
             class="rounded-lg p-3 border" style="background-color: #374151; border-color: #4b5563;">
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <div class="font-semibold text-white">{{ game.opponent }}</div>
              <div class="text-sm text-slate-400">{{ game.date }}</div>
            </div>
            <div class="inline-flex items-center px-2 py-1 rounded text-xs font-medium" 
                 style="background-color: #1e40af; color: #dbeafe;">
              {{ game.time }}
            </div>
          </div>
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
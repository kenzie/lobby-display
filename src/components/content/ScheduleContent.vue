<template>
  <div class="text-white">
    <!-- Small: Next game matchup -->
    <div v-if="size === 'small'" class="px-6 py-8">
      <div class="flex items-center justify-between">
        <!-- Home Team -->
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full mb-3 flex items-center justify-center" 
               style="background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);">
            <span class="text-white font-bold text-lg">{{ data.homeTeam?.abbr || 'CBW' }}</span>
          </div>
          <div class="text-sm font-medium text-white">{{ data.homeTeam?.abbr || 'CBW' }}</div>
          <div class="text-xs text-gray-400 mt-1">{{ data.homeTeam?.record || '22-8' }}</div>
        </div>
        
        <!-- Center - Time/Score -->
        <div class="flex flex-col items-center px-8">
          <div class="text-3xl font-bold text-white mb-1">{{ data.upcomingGames[0].time }}</div>
          <div class="text-xs text-gray-400 uppercase tracking-wider">{{ data.upcomingGames[0].date }}</div>
        </div>
        
        <!-- Away Team -->
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 rounded-full mb-3 flex items-center justify-center" 
               style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);">
            <span class="text-white font-bold text-lg">{{ getOpponentAbbr(data.upcomingGames[0].opponent) }}</span>
          </div>
          <div class="text-sm font-medium text-white">{{ getOpponentAbbr(data.upcomingGames[0].opponent) }}</div>
          <div class="text-xs text-gray-400 mt-1">{{ data.upcomingGames[0].opponent?.record || '0-0' }}</div>
        </div>
      </div>
    </div>
    
    <!-- Medium: Upcoming games list -->
    <div v-else-if="size === 'medium'" class="px-4 py-6">
      <div class="space-y-6">
        <div v-for="game in data.upcomingGames.slice(0, 3)" :key="game.id" 
             class="flex items-center justify-between">
          <!-- Home Team -->
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 rounded-full mb-2 flex items-center justify-center" 
                 style="background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);">
              <span class="text-white font-bold text-sm">{{ data.homeTeam?.abbr || 'CBW' }}</span>
            </div>
            <div class="text-xs font-medium text-white">{{ data.homeTeam?.abbr || 'CBW' }}</div>
          </div>
          
          <!-- Center - Time -->
          <div class="flex flex-col items-center px-6">
            <div class="text-2xl font-bold text-white mb-1">{{ game.time }}</div>
            <div class="text-xs text-gray-400">{{ game.date }}</div>
          </div>
          
          <!-- Away Team -->
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 rounded-full mb-2 flex items-center justify-center" 
                 style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);">
              <span class="text-white font-bold text-sm">{{ getOpponentAbbr(game.opponent) }}</span>
            </div>
            <div class="text-xs font-medium text-white">{{ getOpponentAbbr(game.opponent) }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Large: Compact schedule list -->
    <div v-else class="px-3 py-4">
      <div class="space-y-4 max-h-72 overflow-y-auto">
        <!-- Results -->
        <div v-for="game in data.pastResults" :key="game.id" 
             class="flex items-center justify-between py-2">
          <!-- Home Team -->
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 rounded-full mb-1 flex items-center justify-center" 
                 style="background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);">
              <span class="text-white font-bold text-xs">{{ data.homeTeam?.abbr || 'CBW' }}</span>
            </div>
            <div class="text-xs text-white">{{ data.homeTeam?.abbr || 'CBW' }}</div>
          </div>
          
          <!-- Score/Result -->
          <div class="flex flex-col items-center px-4">
            <div class="text-lg font-bold text-white">{{ game.score }}</div>
            <div class="text-xs text-gray-400">{{ game.date }}</div>
          </div>
          
          <!-- Away Team -->
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 rounded-full mb-1 flex items-center justify-center" 
                 style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);">
              <span class="text-white font-bold text-xs">{{ getOpponentAbbr(game.opponent) }}</span>
            </div>
            <div class="text-xs text-white">{{ getOpponentAbbr(game.opponent) }}</div>
          </div>
        </div>
        
        <!-- Upcoming Games -->
        <div v-for="game in data.upcomingGames" :key="game.id" 
             class="flex items-center justify-between py-2">
          <!-- Home Team -->
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 rounded-full mb-1 flex items-center justify-center" 
                 style="background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);">
              <span class="text-white font-bold text-xs">{{ data.homeTeam?.abbr || 'CBW' }}</span>
            </div>
            <div class="text-xs text-white">{{ data.homeTeam?.abbr || 'CBW' }}</div>
          </div>
          
          <!-- Time -->
          <div class="flex flex-col items-center px-4">
            <div class="text-lg font-bold text-white">{{ game.time }}</div>
            <div class="text-xs text-gray-400">{{ game.date }}</div>
          </div>
          
          <!-- Away Team -->
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 rounded-full mb-1 flex items-center justify-center" 
                 style="background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);">
              <span class="text-white font-bold text-xs">{{ getOpponentAbbr(game.opponent) }}</span>
            </div>
            <div class="text-xs text-white">{{ getOpponentAbbr(game.opponent) }}</div>
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

const getResultStyle = (score: string) => {
  const isWin = score.startsWith('W')
  return {
    backgroundColor: isWin ? '#22c55e' : '#ef4444',
    color: '#ffffff',
    border: 'none'
  }
}

const getOpponentAbbr = (opponent: any) => {
  return opponent?.abbr || opponent
}

const getCurrentRecord = () => {
  return '22-8'
}
</script>
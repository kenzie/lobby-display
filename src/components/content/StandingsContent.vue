<template>
  <div class="text-slate-100" style="padding: 8px 16px;">
    <div v-if="size === 'small'" class="flex flex-col justify-center text-center">
      <div class="text-3xl font-bold text-green-400 mb-1">{{ data.position }}</div>
      <div class="text-sm text-slate-300 mb-2">League Position</div>
      <div class="text-lg font-semibold text-white">{{ data.points }} Points</div>
    </div>
    <div v-else-if="size === 'medium'" class="space-y-2">
      <div class="bg-slate-700/30 rounded-md px-3 py-2 mb-3">
        <div class="text-xs text-slate-400 uppercase tracking-wider">Team</div>
        <div class="text-xs text-slate-400 uppercase tracking-wider float-right">Pts</div>
      </div>
      <div v-for="(team, index) in data.standings.slice(0, 5)" :key="team.name" 
           class="flex justify-between items-center py-2 border-b border-slate-700/50 last:border-b-0">
        <div class="flex items-center">
          <span class="w-6 text-sm font-medium" 
                :class="index < 2 ? 'text-green-400' : 'text-slate-300'">
            {{ index + 1 }}
          </span>
          <span class="font-medium text-white" 
                :class="team.name === 'Cape Breton West' ? 'text-blue-400' : ''">
            {{ team.name }}
          </span>
        </div>
        <span class="font-bold text-white">{{ team.points }}</span>
      </div>
    </div>
    <div v-else class="space-y-1">
      <div class="bg-slate-700/30 rounded-md px-3 py-2 mb-2 grid grid-cols-4 gap-2 text-xs text-slate-400 uppercase tracking-wider">
        <div>Team</div>
        <div class="text-center">W-L-OTL</div>
        <div class="text-center">Pts</div>
      </div>
      <div v-for="(team, index) in data.standings" :key="team.name" 
           class="grid grid-cols-4 gap-2 items-center py-2 border-b border-slate-700/30 last:border-b-0">
        <div class="flex items-center">
          <span class="w-6 text-sm font-medium mr-2" 
                :class="index < 3 ? 'text-green-400' : 'text-slate-400'">
            {{ index + 1 }}
          </span>
          <span class="text-sm font-medium" 
                :class="team.name === 'Cape Breton West' ? 'text-blue-400' : 'text-white'">
            {{ team.name }}
          </span>
        </div>
        <span class="text-center text-sm text-slate-300">{{ team.wins }}-{{ team.losses }}-{{ team.otl }}</span>
        <span class="text-center font-bold text-white">{{ team.points }}</span>
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
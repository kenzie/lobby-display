<template>
  <div class="h-full">
    <div v-if="data.size === 'small'" class="text-lg">
      Position: {{ data.position }} - {{ data.points }} pts
    </div>
    <div v-else-if="data.size === 'medium'" class="space-y-2">
      <div class="text-xl font-bold">Conference Standings</div>
      <div v-for="(team, index) in data.standings.slice(0, 5)" :key="team.name" class="text-sm flex justify-between">
        <span>{{ index + 1 }}. {{ team.name }}</span>
        <span>{{ team.points }}</span>
      </div>
    </div>
    <div v-else class="space-y-2">
      <div class="text-2xl font-bold">Full Standings</div>
      <div v-for="(team, index) in data.standings" :key="team.name" class="text-sm flex justify-between">
        <span>{{ index + 1 }}. {{ team.name }}</span>
        <span>{{ team.wins }}-{{ team.losses }}-{{ team.otl }} ({{ team.points }})</span>
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
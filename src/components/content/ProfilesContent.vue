<template>
  <div class="h-full">
    <div v-if="data.size === 'small'" class="text-center">
      <div class="text-lg font-bold">#{{ data.player.number }} {{ data.player.name }}</div>
      <div class="text-sm">{{ data.player.position }}</div>
    </div>
    <div v-else-if="data.size === 'medium'" class="space-y-2">
      <div class="text-xl font-bold">Player Spotlight</div>
      <div class="text-lg">#{{ data.player.number }} {{ data.player.name }}</div>
      <div class="text-sm">{{ data.player.position }} • {{ data.player.hometown }}</div>
      <div class="text-xs">{{ data.player.stats }}</div>
    </div>
    <div v-else class="space-y-3">
      <div class="text-2xl font-bold">Player Profiles</div>
      <div v-for="player in data.players" :key="player.id" class="space-y-1">
        <div class="text-lg font-bold">#{{ player.number }} {{ player.name }}</div>
        <div class="text-sm">{{ player.position }} • {{ player.hometown }}</div>
        <div class="text-xs text-gray-300">{{ player.bio }}</div>
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
<template>
  <div class="text-slate-100" style="padding: 8px 16px;">
    <div v-if="size === 'small'" class="flex flex-col justify-center">
      <div class="text-base font-medium text-slate-300 mb-1">Latest Tweet</div>
      <div class="text-sm text-blue-400 mb-1">@{{ data.latestTweet.handle }}</div>
      <div class="text-sm text-white">{{ data.latestTweet.text.slice(0, 60) }}...</div>
    </div>
    <div v-else-if="size === 'medium'" class="space-y-3">
      <div class="text-lg font-semibold text-white mb-2">Social Feed</div>
      <div v-for="tweet in data.tweets.slice(0, 2)" :key="tweet.id" class="bg-slate-700/30 rounded-md p-3 border border-slate-600 space-y-2">
        <div class="text-sm text-blue-400 font-medium">@{{ tweet.handle }}</div>
        <div class="text-sm text-white">{{ tweet.text }}</div>
      </div>
    </div>
    <div v-else class="space-y-2">
      <div class="text-xl font-bold text-white mb-3">Twitter Feed</div>
      <div v-for="tweet in data.tweets" :key="tweet.id" class="bg-slate-700/20 rounded-md p-3 border border-slate-600/50 space-y-2">
        <div class="flex justify-between items-center">
          <span class="text-blue-400 font-medium">@{{ tweet.handle }}</span>
          <span class="text-xs text-slate-400">{{ tweet.time }}</span>
        </div>
        <div class="text-sm text-white">{{ tweet.text }}</div>
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
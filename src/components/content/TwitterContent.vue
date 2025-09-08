<template>
  <div class="h-full">
    <div v-if="data.size === 'small'" class="text-lg">
      @{{ data.latestTweet.handle }}: {{ data.latestTweet.text.slice(0, 60) }}...
    </div>
    <div v-else-if="data.size === 'medium'" class="space-y-2">
      <div class="text-xl font-bold">Social Feed</div>
      <div v-for="tweet in data.tweets.slice(0, 2)" :key="tweet.id" class="space-y-1">
        <div class="text-sm">@{{ tweet.handle }}</div>
        <div class="text-xs">{{ tweet.text }}</div>
      </div>
    </div>
    <div v-else class="space-y-3">
      <div class="text-2xl font-bold">Twitter Feed</div>
      <div v-for="tweet in data.tweets" :key="tweet.id" class="space-y-1">
        <div class="flex justify-between text-sm">
          <span>@{{ tweet.handle }}</span>
          <span class="text-xs text-gray-400">{{ tweet.time }}</span>
        </div>
        <div class="text-xs">{{ tweet.text }}</div>
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
<template>
  <div class="text-slate-100" style="padding: 8px 16px;">
    <div v-if="size === 'small'" class="text-center">
      <div class="w-full h-20 rounded mb-2" style="background-color: #374151; overflow: hidden;">
        <video 
          class="w-full h-full"
          :src="videoSrc" 
          muted 
          autoplay 
          loop
          style="object-fit: cover; display: block;">
        </video>
      </div>
      <h3 class="text-sm font-semibold text-white">{{ data.title }}</h3>
      <p class="text-xs text-slate-400">{{ data.duration }}</p>
    </div>

    <div v-else-if="size === 'medium'" class="flex flex-col">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-lg font-semibold text-white">{{ data.title }}</h3>
        <span class="text-xs text-white px-2 py-1 rounded" style="background-color: #dc2626;">{{ data.duration }}</span>
      </div>
      <div class="w-full h-28 rounded mb-2" style="background-color: #374151; overflow: hidden;">
        <video 
          class="w-full h-full"
          :src="videoSrc" 
          muted 
          autoplay 
          loop
          style="object-fit: cover; display: block;">
        </video>
      </div>
      <p class="text-sm text-slate-300">{{ data.description }}</p>
    </div>

    <div v-else class="flex flex-col">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-xl font-semibold text-white">{{ data.title }}</h3>
        <span class="text-sm text-white px-3 py-1 rounded" style="background-color: #dc2626;">{{ data.duration }}</span>
      </div>
      <div class="w-full h-36 rounded mb-3" style="background-color: #374151; overflow: hidden;">
        <video 
          class="w-full h-full"
          :src="videoSrc" 
          muted 
          autoplay 
          loop
          style="object-fit: cover; display: block;">
        </video>
      </div>
      <p class="text-slate-300 mb-2">{{ data.description }}</p>
      <div class="flex justify-between text-sm">
        <span class="text-slate-400">{{ data.date }}</span>
        <span class="px-2 py-1 rounded text-xs text-slate-200" style="background-color: #475569;">{{ data.category }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineProps<{
  size: 'small' | 'medium' | 'large'
  data: any
}>()

const videoSrc = computed(() => {
  const videos = ['al_macinnis.mov', 'andrew_macdonald.mp4', 'telus-cup.mp4']
  const randomVideo = videos[Math.floor(Math.random() * videos.length)]
  return `/assets/videos/${randomVideo}`
})
</script>
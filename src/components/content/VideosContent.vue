<template>
  <div v-if="size === 'small'" class="w-full h-full">
    <video 
      class="w-full h-full"
      :src="videoSrc" 
      muted 
      autoplay 
      loop
      style="object-fit: cover; object-position: top; display: block;">
    </video>
  </div>
  
  <div v-else class="text-slate-100" style="padding: 8px 0;">
    <div v-if="size === 'medium'" class="flex flex-col h-full">
      <div class="w-full flex-1" style="overflow: hidden; margin-bottom: 16px;">
        <video 
          class="w-full h-full"
          :src="videoSrc" 
          muted 
          autoplay 
          loop
          style="object-fit: cover; display: block;">
        </video>
      </div>
      <div style="padding: 0 16px; margin-bottom: 12px;">
        <h3 class="text-lg font-semibold text-white">{{ data.title }}</h3>
      </div>
      <p class="text-sm text-slate-300" style="padding: 0 16px;">{{ data.description }}</p>
    </div>

    <div v-else class="flex flex-col h-full">
      <div class="w-full flex-1" style="overflow: hidden; margin-bottom: 16px;">
        <video 
          class="w-full h-full"
          :src="videoSrc" 
          muted 
          autoplay 
          loop
          style="object-fit: cover; display: block;">
        </video>
      </div>
      <div style="padding: 0 16px; margin-bottom: 12px;">
        <h3 class="text-xl font-semibold text-white">{{ data.title }}</h3>
      </div>
      <div style="padding: 0 16px;">
        <p class="text-slate-300 mb-2">{{ data.description }}</p>
        <div class="flex justify-between text-sm">
          <span class="text-slate-400">{{ data.date }}</span>
          <span class="px-2 py-1 rounded text-xs text-slate-200" style="background-color: #475569;">{{ data.category }}</span>
        </div>
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
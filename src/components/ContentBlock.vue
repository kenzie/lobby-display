<template>
  <div
    class="bg-transparent shadow-lg flex flex-col border border-slate-700"
    :class="sizeClasses[block.size]"
    style="background-color: transparent; color: #f1f5f9; border-color: #334155; border-radius: 8px;"
  >
    <div class="bg-slate-700/50" style="background-color: #374151; border-top-left-radius: 8px; border-top-right-radius: 8px; padding: 8px 16px;">
      <div class="flex items-center justify-between">
        <h3 class="text-sm font-semibold text-slate-200 uppercase tracking-wider">
          {{ formatContentType(block.type) }}
        </h3>
        <span class="inline-flex items-center text-xs font-medium" 
              style="background-color: #1e40af; color: #dbeafe; padding: 4px 8px; border-radius: 6px;">
          {{ block.size }}
        </span>
      </div>
    </div>
    <div class="flex-1">
      <component :is="contentComponent" :data="block.data" :size="block.size" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ContentBlock as ContentBlockType } from '@/types'
import ScheduleContent from './content/ScheduleContent.vue'
import ResultsContent from './content/ResultsContent.vue'
import StandingsContent from './content/StandingsContent.vue'
import StatisticsContent from './content/StatisticsContent.vue'
import NewsContent from './content/NewsContent.vue'
import TwitterContent from './content/TwitterContent.vue'
import SponsorsContent from './content/SponsorsContent.vue'
import PhotosContent from './content/PhotosContent.vue'
import VideosContent from './content/VideosContent.vue'
import ProfilesContent from './content/ProfilesContent.vue'
import FactsContent from './content/FactsContent.vue'

interface Props {
  block: ContentBlockType
}

const props = defineProps<Props>()

const sizeClasses = {
  small: 'h-1/3', // 1 row
  medium: 'h-2/3', // 2 rows  
  large: 'h-full' // 3 rows
}

const formatContentType = (type: string) => {
  switch (type) {
    case 'twitter': return 'Social Media'
    case 'profiles': return 'Player Profile'
    case 'facts': return 'Did You Know'
    case 'videos': return 'Video Highlights'
    default: return type
  }
}


const contentComponents = {
  schedule: ScheduleContent,
  results: ResultsContent,
  standings: StandingsContent,
  statistics: StatisticsContent,
  news: NewsContent,
  twitter: TwitterContent,
  sponsors: SponsorsContent,
  photos: PhotosContent,
  videos: VideosContent,
  profiles: ProfilesContent,
  facts: FactsContent
}

const contentComponent = computed(() => {
  return contentComponents[props.block.type]
})
</script>
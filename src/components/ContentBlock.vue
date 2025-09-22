<template>
  <div
    class="flex flex-col overflow-hidden bg-gray-800 text-white rounded-lg"
    :class="sizeClasses[block.size]"
  >
    <div class="px-6 py-4">
      <h3 class="text-4xl font-semibold text-gray-300 uppercase tracking-wide">
        {{ formatContentType(block.type) }}
      </h3>
    </div>
    <div class="flex-1 overflow-hidden">
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
<template>
  <div
    class="flex flex-col overflow-hidden bg-gray-800 text-white rounded-lg"
    :class="sizeClasses[block.size]"
  >
    <div v-if="!(block.type === 'videos' && block.size === 'small')" class="px-4 py-2">
      <h3 class="text-2xl font-semibold text-gray-500 uppercase tracking-tight">
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
  small: 'h-[calc(33.333%-10.67px)]', // 1 row minus gap adjustment
  medium: 'h-[calc(66.667%-5.33px)]', // 2 rows minus gap adjustment  
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
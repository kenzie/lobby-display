<template>
  <div
    class="border p-4"
    :class="sizeClasses[block.size]"
    style="background-color: #000000; color: #ffffff; border-color: #374151;"
  >
    <div class="text-sm text-gray-400 mb-2">{{ block.type.toUpperCase() }}</div>
    <component :is="contentComponent" :data="block.data" />
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
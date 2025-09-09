<template>
  <div class="w-screen h-screen bg-black overflow-hidden flex">
    <div
      class="flex"
      :class="{ 'transition-transform duration-1000 ease-linear': isSliding }"
      :style="{ transform: `translateX(${slideOffset}px)` }"
    >
      <div
        v-for="column in visibleColumns"
        :key="column.id"
        class="flex-shrink-0 flex flex-col"
        :style="{ width: `${100 / 3}vw` }"
      >
        <ContentBlock
          v-for="block in column.blocks"
          :key="block.id"
          :block="block"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ContentBlock from './components/ContentBlock.vue'
import { generateRandomColumn } from './utils/contentGenerator'
import type { Column } from './types'

const visibleColumns = ref<Column[]>([])
const slideOffset = ref(0)
const columnWidth = window.innerWidth / 3
const isSliding = ref(false)

let slideInterval: number

const initializeColumns = () => {
  // Create 4 columns (3 visible + 1 offscreen right)
  for (let i = 0; i < 4; i++) {
    visibleColumns.value.push(generateRandomColumn())
  }
}

const slideColumns = () => {
  if (isSliding.value) return
  
  isSliding.value = true
  slideOffset.value -= columnWidth
  
  setTimeout(() => {
    // Remove first column and add new one at the end
    visibleColumns.value.shift()
    visibleColumns.value.push(generateRandomColumn())
    // Reset without animation
    slideOffset.value = 0
    isSliding.value = false
  }, 1000) // Match transition duration
}

onMounted(() => {
  initializeColumns()
  
  // Environment-specific timing
  const isDev = import.meta.env.MODE === 'development'
  const isPreview = window.location.port === '4173' || import.meta.env.COMMAND === 'preview'
  
  let intervalTime: number
  if (isDev) {
    intervalTime = 0 // No animation in development
  } else if (isPreview) {
    intervalTime = 5000 // 5 seconds for preview
  } else {
    intervalTime = 30000 // 30 seconds for production
  }
  
  if (intervalTime > 0) {
    slideInterval = setInterval(slideColumns, intervalTime)
  }
})

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
})
</script>
<template>
  <div class="w-screen h-screen bg-slate-900 overflow-hidden flex">
    <div
      ref="slideContainer"
      class="flex columns-container"
      :class="{ 'sliding': isSliding }"
    >
      <div
        v-for="column in visibleColumns"
        :key="column.id"
        class="flex-shrink-0 flex flex-col column"
        :style="{ width: `${100 / 3}vw`, padding: '32px 16px', gap: '32px' }"
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
const slideContainer = ref<HTMLElement>()
const isSliding = ref(false)

let slideInterval: number

const initializeColumns = () => {
  // Create 4 columns (3 visible + 1 offscreen right)
  for (let i = 0; i < 4; i++) {
    visibleColumns.value.push(generateRandomColumn())
  }
}

const slideColumns = () => {
  if (isSliding.value || !slideContainer.value) return
  
  isSliding.value = true
  
  // Use CSS animation instead of JavaScript transforms
  slideContainer.value.addEventListener('animationend', () => {
    // Remove first column and add new one at the end
    visibleColumns.value.shift()
    visibleColumns.value.push(generateRandomColumn())
    isSliding.value = false
  }, { once: true })
}

onMounted(() => {
  initializeColumns()
  
  // Environment-specific timing
  const isDev = import.meta.env.DEV
  const isPreview = window.location.port === '4173'
  
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

<style scoped>
.columns-container {
  will-change: transform;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

.columns-container.sliding {
  animation: slideLeft 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.column {
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

@keyframes slideLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-33.333333vw, 0, 0);
  }
}
</style>
<template>
  <Screensaver v-if="showScreensaver" />
  <div v-else class="w-screen h-screen bg-slate-900 overflow-hidden">
    <div
      class="flex columns-container"
      :class="{ 'is-sliding': isSliding }"
    >
      <div
        v-for="(column, index) in columns"
        :key="`${column.id}-${animationCycle}`"
        class="flex-shrink-0 flex flex-col column"
        :class="{
          'column-static': isSliding && index === 0,
          'column-sliding': isSliding && index > 0
        }"
        :style="{ width: `${100 / 3}vw`, height: '100vh', padding: '32px 16px', gap: '32px' }"
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import ContentBlock from './components/ContentBlock.vue'
import Screensaver from './components/Screensaver.vue'
import { generateRandomColumn } from './utils/contentGenerator'
import type { Column } from './types'

const SCREENSAVER_START = Number(import.meta.env.VITE_SCREENSAVER_START_HOUR) || 23
const SCREENSAVER_END = Number(import.meta.env.VITE_SCREENSAVER_END_HOUR) || 7

const columns = ref<Column[]>([])
const isSliding = ref(false)
const animationCycle = ref(0)
const showScreensaver = ref(false)

let slideInterval: number | undefined
let checkInterval: number | undefined

const initializeColumns = async () => {
  // Create 4 columns (3 visible on screen + 1 off-screen to the right)
  for (let i = 0; i < 4; i++) {
    const column = await generateRandomColumn()
    columns.value.push(column)
  }
}

const checkTimeAndSwitch = () => {
  const hour = new Date().getHours()
  showScreensaver.value = hour >= SCREENSAVER_START || hour < SCREENSAVER_END
}

const handleKeyPress = (event: KeyboardEvent) => {
  // Toggle screensaver with 's' key for testing
  if (event.key === 's' || event.key === 'S') {
    showScreensaver.value = !showScreensaver.value
  }
}

const slideColumns = async () => {
  if (isSliding.value) return

  // Generate the new column before starting animation to prevent flash
  const newColumn = await generateRandomColumn()

  // Set sliding state to true, triggering the animation via CSS classes
  isSliding.value = true

  // Ensure Vue has applied the classes before we continue
  await nextTick()

  // Wait for the animation to complete (1000ms)
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Update the columns array
  columns.value.shift()
  columns.value.push(newColumn)

  // Increment cycle counter to force new keys
  animationCycle.value++

  // Reset sliding state
  isSliding.value = false

  // Wait for Vue to complete the render
  await nextTick()
}

onMounted(async () => {
  // Check time and set up interval to check every minute
  checkTimeAndSwitch()
  checkInterval = setInterval(checkTimeAndSwitch, 60000)

  // Add keyboard shortcut for testing
  window.addEventListener('keydown', handleKeyPress)

  await initializeColumns()

  // Environment-specific timing
  const isDev = import.meta.env.DEV
  const intervalTime = isDev
    ? 0  // No animation in development
    : Number(import.meta.env.VITE_SLIDE_INTERVAL) || 5000  // 5 seconds default, override with VITE_SLIDE_INTERVAL

  if (intervalTime > 0) {
    slideInterval = setInterval(slideColumns, intervalTime)
  }
})

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
  if (checkInterval) {
    clearInterval(checkInterval)
  }
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<style scoped>
.columns-container {
  position: relative;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
}

.column {
  background-color: rgb(15 23 42); /* slate-900 to match page background and prevent gaps from showing through */
  position: relative;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
}

.column-static {
  /* First column stays in place during animation - covered by sliding columns */
  transform: translate3d(0, 0, 0);
  z-index: 1;
}

.column-sliding {
  /* Columns 2, 3, 4 slide left by one column width (33.333333vw) */
  will-change: transform;
  animation: slideLeft 1000ms ease-in-out forwards;
  z-index: 2;
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
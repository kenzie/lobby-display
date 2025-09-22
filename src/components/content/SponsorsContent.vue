<template>
  <div class="text-slate-100 h-full" style="padding: 8px 16px;">
    <!-- Small: 1 sponsor -->
    <div v-if="size === 'small'" class="flex items-center justify-center h-full">
      <div class="text-center">
        <div class="text-lg font-bold text-white">{{ getSponsors(1)[0].name }}</div>
      </div>
    </div>
    
    <!-- Medium: 3 sponsors -->
    <div v-else-if="size === 'medium'" class="flex flex-col gap-3 h-full">
      <div v-for="sponsor in getSponsors(3)" 
           :key="sponsor.name" 
           class="bg-slate-700/30 rounded-md p-4 text-center flex-1 flex flex-col justify-center">
        <div class="text-base font-bold text-white">{{ sponsor.name }}</div>
        <div v-if="sponsor.tagline" class="text-xs text-slate-300 mt-1">{{ sponsor.tagline }}</div>
      </div>
    </div>
    
    <!-- Large: 4-5 sponsors -->
    <div v-else class="flex flex-col gap-2 h-full">
      <div v-for="sponsor in getSponsors(5)" 
           :key="sponsor.name" 
           class="bg-slate-700/20 rounded-md p-3 text-center flex-1 flex flex-col justify-center">
        <div class="text-sm font-bold text-white">{{ sponsor.name }}</div>
        <div v-if="sponsor.tagline" class="text-xs text-slate-300 mt-1">{{ sponsor.tagline }}</div>
        <div v-if="sponsor.description && sponsor.description.length < 50" class="text-xs text-slate-400 mt-1">{{ sponsor.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: any
  size: 'small' | 'medium' | 'large'
}

defineProps<Props>()

// Generate dummy sponsor data
const getSponsors = (count: number) => {
  const dummySponsors = [
    { name: 'Tim Hortons', tagline: 'Always Fresh', description: 'Canada\'s favorite coffee' },
    { name: 'Canadian Tire', tagline: 'We All Live Here', description: 'Automotive and sports retailer' },
    { name: 'Sobeys', tagline: 'Fresh Food Done Right', description: 'Atlantic Canada\'s grocer' },
    { name: 'Irving Oil', tagline: 'Your Local Energy Source', description: 'Maritime fuel provider' },
    { name: 'Eastlink', tagline: 'Life Connected', description: 'Maritime communications' },
    { name: 'Scotia Bank', tagline: 'You\'re Richer Than You Think', description: 'Banking services' },
    { name: 'CIBC', tagline: 'Banking That Fits Your Life', description: 'Financial institution' }
  ]
  
  return dummySponsors.slice(0, count)
}
</script>
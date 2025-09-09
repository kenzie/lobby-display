import { dummyData } from '@/data/dummyData'
import type { ContentBlock, ContentType, ContentSize, Column } from '@/types'

const contentTypes: ContentType[] = [
  'schedule', 'results', 'standings', 'statistics', 
  'news', 'twitter', 'sponsors', 'photos', 
  'videos', 'profiles', 'facts'
]

const contentSizes: ContentSize[] = ['small', 'medium', 'large']

// Track which content types are currently visible to avoid duplicates
const visibleContentTypes = new Set<ContentType>()

function getRandomContentType(): ContentType {
  // Filter out currently visible content types
  const availableTypes = contentTypes.filter(type => !visibleContentTypes.has(type))
  
  // If all types are visible, reset the set
  if (availableTypes.length === 0) {
    visibleContentTypes.clear()
    return contentTypes[Math.floor(Math.random() * contentTypes.length)]
  }
  
  return availableTypes[Math.floor(Math.random() * availableTypes.length)]
}

function getRandomSize(): ContentSize {
  return contentSizes[Math.floor(Math.random() * contentSizes.length)]
}

function createContentBlock(): ContentBlock {
  const type = getRandomContentType()
  const size = getRandomSize()
  
  visibleContentTypes.add(type)
  
  return {
    id: `${type}-${size}-${Date.now()}-${Math.random()}`,
    type,
    size,
    data: dummyData[type][size]
  }
}

function getHeightForSize(size: ContentSize): number {
  switch (size) {
    case 'small': return 1
    case 'medium': return 2
    case 'large': return 3
  }
}

export function generateRandomColumn(): Column {
  const blocks: ContentBlock[] = []
  let totalHeight = 0
  const maxHeight = 3 // 3 rows per column
  
  while (totalHeight < maxHeight) {
    const remainingHeight = maxHeight - totalHeight
    
    // Choose a size that fits
    let availableSizes: ContentSize[]
    if (remainingHeight >= 3) {
      availableSizes = ['small', 'medium', 'large']
    } else if (remainingHeight >= 2) {
      availableSizes = ['small', 'medium']
    } else {
      availableSizes = ['small']
    }
    
    const size = availableSizes[Math.floor(Math.random() * availableSizes.length)]
    const block = createContentBlock()
    block.size = size // Override with our calculated size
    block.data = dummyData[block.type][size]
    
    blocks.push(block)
    totalHeight += getHeightForSize(size)
  }
  
  return {
    id: `column-${Date.now()}-${Math.random()}`,
    blocks
  }
}
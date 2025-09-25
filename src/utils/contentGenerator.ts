import { dummyData } from '@/data/dummyData'
import { dataService } from '@/services/dataService'
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

async function createContentBlock(): Promise<ContentBlock> {
  try {
    const type = getRandomContentType()
    const size = getRandomSize()
    
    visibleContentTypes.add(type)
    
    let data
    try {
      if (type === 'profiles') {
        console.log(`Fetching roster data for ${type}:${size}`)
        const rosterData = await dataService.getRosterData()
        data = rosterData[size]
        console.log(`Roster data fetched:`, data)
        
        // Ensure data is not undefined
        if (!data) {
          console.warn(`No ${size} data found in roster, using dummy data`)
          data = dummyData[type][size]
        }
      } else if (type === 'schedule') {
        console.log(`Fetching schedule data for ${type}:${size}`)
        const scheduleData = await dataService.getScheduleData()
        data = scheduleData[size]
        console.log(`Schedule data fetched:`, data)
        
        // Ensure data is not undefined
        if (!data) {
          console.warn(`No ${size} data found in schedule, using dummy data`)
          data = dummyData[type][size]
        }
      } else if (type === 'statistics') {
        console.log(`Fetching statistics data for ${type}:${size}`)
        const statisticsData = await dataService.getStatisticsData()
        data = statisticsData[size]
        console.log(`Statistics data fetched:`, data)
        
        // Ensure data is not undefined
        if (!data) {
          console.warn(`No ${size} data found in statistics, using dummy data`)
          data = dummyData[type][size]
        }
      } else if (type === 'results') {
        console.log(`Fetching results data for ${type}:${size}`)
        const resultsData = await dataService.getResultsData()
        data = resultsData[size]
        console.log(`Results data fetched:`, data)
        
        // Ensure data is not undefined
        if (!data) {
          console.warn(`No ${size} data found in results, using dummy data`)
          data = dummyData[type][size]
        }
      } else if (type === 'standings') {
        console.log(`Fetching standings data for ${type}:${size}`)
        const standingsData = await dataService.getStandingsData()
        data = standingsData[size]
        console.log(`Standings data fetched:`, data)
        
        // Ensure data is not undefined
        if (!data) {
          console.warn(`No ${size} data found in standings, using dummy data`)
          data = dummyData[type][size]
        }
      } else {
        data = dummyData[type][size]
      }
    } catch (error) {
      console.error(`Error fetching data for ${type}:`, error)
      // Fallback to dummy data
      data = dummyData[type][size]
      console.log(`Using fallback data for ${type}:${size}`)
    }
    
    // Final safety check
    if (!data) {
      console.error(`No data available for ${type}:${size}, using fallback`)
      data = dummyData.facts.small // Safe fallback
    }
    
    const block = {
      id: `${type}-${size}-${Date.now()}-${Math.random()}`,
      type,
      size,
      data
    }
    
    console.log(`Created content block:`, block)
    return block
  } catch (error) {
    console.error('Error creating content block:', error)
    // Return a safe fallback block
    return {
      id: `fallback-${Date.now()}-${Math.random()}`,
      type: 'facts',
      size: 'small',
      data: dummyData.facts.small
    }
  }
}

function getHeightForSize(size: ContentSize): number {
  switch (size) {
    case 'small': return 1
    case 'medium': return 2
    case 'large': return 3
  }
}

export async function generateRandomColumn(): Promise<Column> {
  try {
    console.log('Generating new column...')
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
      const block = await createContentBlock()
      block.size = size // Override with our calculated size
      
      // Refetch data with correct size
      try {
        if (block.type === 'profiles') {
          const rosterData = await dataService.getRosterData()
          block.data = rosterData[size]
          
          // Ensure data is not undefined
          if (!block.data) {
            console.warn(`No ${size} data found in roster for size override, using dummy data`)
            block.data = dummyData[block.type][size]
          }
        } else if (block.type === 'schedule') {
          const scheduleData = await dataService.getScheduleData()
          block.data = scheduleData[size]
          
          // Ensure data is not undefined
          if (!block.data) {
            console.warn(`No ${size} data found in schedule for size override, using dummy data`)
            block.data = dummyData[block.type][size]
          }
        } else if (block.type === 'statistics') {
          const statisticsData = await dataService.getStatisticsData()
          block.data = statisticsData[size]
          
          // Ensure data is not undefined
          if (!block.data) {
            console.warn(`No ${size} data found in statistics for size override, using dummy data`)
            block.data = dummyData[block.type][size]
          }
        } else if (block.type === 'results') {
          const resultsData = await dataService.getResultsData()
          block.data = resultsData[size]
          
          // Ensure data is not undefined
          if (!block.data) {
            console.warn(`No ${size} data found in results for size override, using dummy data`)
            block.data = dummyData[block.type][size]
          }
        } else if (block.type === 'standings') {
          const standingsData = await dataService.getStandingsData()
          block.data = standingsData[size]
          
          // Ensure data is not undefined
          if (!block.data) {
            console.warn(`No ${size} data found in standings for size override, using dummy data`)
            block.data = dummyData[block.type][size]
          }
        } else {
          block.data = dummyData[block.type][size]
        }
      } catch (error) {
        console.error(`Error fetching data for ${block.type}:`, error)
        block.data = dummyData[block.type][size]
      }
      
      // Final safety check for size override
      if (!block.data) {
        console.error(`No data available for ${block.type}:${size} in size override, using fallback`)
        block.data = dummyData.facts.small
      }
      
      blocks.push(block)
      totalHeight += getHeightForSize(size)
    }
    
    const column = {
      id: `column-${Date.now()}-${Math.random()}`,
      blocks
    }
    
    console.log('Generated column:', column)
    return column
  } catch (error) {
    console.error('Error generating column:', error)
    // Return a safe fallback column
    return {
      id: `fallback-column-${Date.now()}`,
      blocks: [
        {
          id: `fallback-block-${Date.now()}`,
          type: 'facts',
          size: 'large',
          data: dummyData.facts.large
        }
      ]
    }
  }
}
interface RosterData {
  small: any
  medium: any
  large: any
}

interface DataCache {
  roster: RosterData | null
  lastUpdated: Record<string, number>
}

class DataService {
  private cache: DataCache = {
    roster: null,
    lastUpdated: {}
  }
  
  private readonly CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

  async getRosterData(): Promise<RosterData> {
    const now = Date.now()
    const lastUpdated = this.cache.lastUpdated.roster || 0
    
    // Check if cache is still valid
    if (this.cache.roster && (now - lastUpdated) < this.CACHE_DURATION) {
      return this.cache.roster
    }

    try {
      const response = await fetch('/data/roster.json')
      if (!response.ok) {
        throw new Error(`Failed to fetch roster: ${response.status}`)
      }
      
      const rawRosterData = await response.json()
      
      // Transform raw roster data into expected format
      const transformedData = this.transformRosterData(rawRosterData)
      
      // Update cache
      this.cache.roster = transformedData
      this.cache.lastUpdated.roster = now
      
      return transformedData
    } catch (error) {
      console.error('Error fetching roster data:', error)
      
      // Return cached data if available, otherwise throw
      if (this.cache.roster) {
        console.warn('Using cached roster data due to fetch error')
        return this.cache.roster
      }
      
      throw error
    }
  }

  private transformRosterData(players: any[]): RosterData {
    // Helper function to get random players
    const getRandomPlayers = (count: number) => {
      const shuffled = [...players].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, count)
    }

    // Helper to format position
    const formatPosition = (pos: string) => {
      switch (pos) {
        case 'For': return 'Forward'
        case 'D': return 'Defense'
        case 'G': return 'Goalie'
        default: return pos
      }
    }

    // Transform player data to match expected format
    const transformPlayer = (player: any) => {
      const height = player.hgt || ''
      const weight = (player.wgt && player.wgt !== 'f') ? player.wgt : ''
      const hometown = player.ht || ''
      
      // Build bio with available data
      let bio = ''
      if (height && weight) {
        bio = `${height}, ${weight}lbs`
      } else if (height) {
        bio = height
      } else if (weight) {
        bio = `${weight}lbs`
      }
      if (hometown) {
        bio = bio ? `${bio} - ${hometown}` : hometown
      }
      
      return {
        id: player.id,
        number: player.num,
        name: `${player.fn} ${player.ln}`,
        position: formatPosition(player.pos),
        hometown: hometown,
        height: height,
        weight: weight,
        bio: bio,
        stats: `${formatPosition(player.pos)} • #${player.num}`
      }
    }

    return {
      small: {
        size: 'small',
        player: transformPlayer(getRandomPlayers(1)[0])
      },
      medium: {
        size: 'medium',
        players: getRandomPlayers(3).map(transformPlayer)
      },
      large: {
        size: 'large',
        players: getRandomPlayers(5).map(transformPlayer)
      }
    }
  }

  // Clear cache - useful for testing
  clearCache() {
    this.cache = {
      roster: null,
      lastUpdated: {}
    }
  }
}

// Export singleton instance
export const dataService = new DataService()
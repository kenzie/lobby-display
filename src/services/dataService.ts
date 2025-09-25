interface RosterData {
  small: any
  medium: any
  large: any
}

interface ScheduleData {
  small: any
  medium: any
  large: any
}

interface StatisticsData {
  small: any
  medium: any
  large: any
}

interface ResultsData {
  small: any
  medium: any
  large: any
}

interface StandingsData {
  small: any
  medium: any
  large: any
}

interface DataCache {
  roster: RosterData | null
  schedule: ScheduleData | null
  statistics: StatisticsData | null
  results: ResultsData | null
  standings: StandingsData | null
  lastUpdated: Record<string, number>
}

class DataService {
  private cache: DataCache = {
    roster: null,
    schedule: null,
    statistics: null,
    results: null,
    standings: null,
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

  async getScheduleData(): Promise<ScheduleData> {
    const now = Date.now()
    const lastUpdated = this.cache.lastUpdated.schedule || 0
    
    // Check if cache is still valid
    if (this.cache.schedule && (now - lastUpdated) < this.CACHE_DURATION) {
      return this.cache.schedule
    }

    try {
      const response = await fetch('/data/schedule.json')
      if (!response.ok) {
        throw new Error(`Failed to fetch schedule: ${response.status}`)
      }
      
      const rawScheduleData = await response.text()
      
      // Parse the JavaScript variable format (jsonTSched = [...];)
      const jsonStart = rawScheduleData.indexOf('jsonTSched = ') + 13
      const jsonEnd = rawScheduleData.indexOf(';', jsonStart)
      const scheduleJson = rawScheduleData.substring(jsonStart, jsonEnd)
      const scheduleArray = JSON.parse(scheduleJson)
      
      // Transform raw schedule data into expected format
      const transformedData = this.transformScheduleData(scheduleArray)
      
      // Update cache
      this.cache.schedule = transformedData
      this.cache.lastUpdated.schedule = now
      
      return transformedData
    } catch (error) {
      console.error('Error fetching schedule data:', error)
      
      // Return cached data if available, otherwise throw
      if (this.cache.schedule) {
        console.warn('Using cached schedule data due to fetch error')
        return this.cache.schedule
      }
      
      throw error
    }
  }

  async getStatisticsData(): Promise<StatisticsData> {
    const now = Date.now()
    const lastUpdated = this.cache.lastUpdated.statistics || 0
    
    // Check if cache is still valid
    if (this.cache.statistics && (now - lastUpdated) < this.CACHE_DURATION) {
      return this.cache.statistics
    }

    try {
      const response = await fetch('/data/statistics.json')
      if (!response.ok) {
        throw new Error(`Failed to fetch statistics: ${response.status}`)
      }
      
      const statisticsData = await response.json()
      
      // Transform raw statistics data into expected format
      const transformedData = this.transformStatisticsData(statisticsData[0])
      
      // Update cache
      this.cache.statistics = transformedData
      this.cache.lastUpdated.statistics = now
      
      return transformedData
    } catch (error) {
      console.error('Error fetching statistics data:', error)
      
      // Return cached data if available, otherwise throw
      if (this.cache.statistics) {
        console.warn('Using cached statistics data due to fetch error')
        return this.cache.statistics
      }
      
      throw error
    }
  }

  async getResultsData(): Promise<ResultsData> {
    const now = Date.now()
    const lastUpdated = this.cache.lastUpdated.results || 0
    
    // Check if cache is still valid
    if (this.cache.results && (now - lastUpdated) < this.CACHE_DURATION) {
      return this.cache.results
    }

    try {
      const response = await fetch('/data/schedule.json')
      if (!response.ok) {
        throw new Error(`Failed to fetch schedule for results: ${response.status}`)
      }
      
      const rawScheduleData = await response.text()
      
      // Parse the JavaScript variable format (jsonTSched = [...];)
      const jsonStart = rawScheduleData.indexOf('jsonTSched = ') + 13
      const jsonEnd = rawScheduleData.indexOf(';', jsonStart)
      const scheduleJson = rawScheduleData.substring(jsonStart, jsonEnd)
      const scheduleArray = JSON.parse(scheduleJson)
      
      // Transform raw schedule data into results format
      const transformedData = this.transformResultsData(scheduleArray)
      
      // Update cache
      this.cache.results = transformedData
      this.cache.lastUpdated.results = now
      
      return transformedData
    } catch (error) {
      console.error('Error fetching results data:', error)
      
      // Return cached data if available, otherwise throw
      if (this.cache.results) {
        console.warn('Using cached results data due to fetch error')
        return this.cache.results
      }
      
      throw error
    }
  }

  async getStandingsData(): Promise<StandingsData> {
    const now = Date.now()
    const lastUpdated = this.cache.lastUpdated.standings || 0
    
    // Check if cache is still valid
    if (this.cache.standings && (now - lastUpdated) < this.CACHE_DURATION) {
      return this.cache.standings
    }

    try {
      const response = await fetch('/data/standings.json')
      if (!response.ok) {
        throw new Error(`Failed to fetch standings: ${response.status}`)
      }
      
      const standingsData = await response.json()
      
      // Transform raw standings data into expected format
      const transformedData = this.transformStandingsData(standingsData[0])
      
      // Update cache
      this.cache.standings = transformedData
      this.cache.lastUpdated.standings = now
      
      return transformedData
    } catch (error) {
      console.error('Error fetching standings data:', error)
      
      // Return cached data if available, otherwise throw
      if (this.cache.standings) {
        console.warn('Using cached standings data due to fetch error')
        return this.cache.standings
      }
      
      throw error
    }
  }

  private transformScheduleData(games: any[]): ScheduleData {
    // Separate past results and upcoming games
    const pastGames = games.filter(game => game.st === 'F').slice(0, 10) // Finished games
    const upcomingGames = games.filter(game => game.st !== 'F').slice(0, 10) // Future games
    
    // Transform game data
    const transformGame = (game: any, includeScore = false) => {
      const isHome = game.h === 1728 // Cape Breton West team ID
      const opponent = isHome ? game.v_n : game.h_n
      const opponentAbbr = isHome ? game.v_n_s : game.h_n_s
      
      return {
        id: game.g_id,
        date: game.gdl, // "Sat, Aug 23"
        time: game.gt3, // "11:00AM"
        opponent: {
          name: opponent,
          abbr: opponentAbbr
        },
        location: isHome ? 'Home' : 'Away',
        venue: game.rn,
        ...(includeScore && {
          score: isHome ? `${game.hs}-${game.vs}` : `${game.vs}-${game.hs}`,
          result: this.determineResult(game, isHome)
        })
      }
    }

    // Get next upcoming game for small view
    const nextGame = upcomingGames[0]
    
    return {
      small: {
        size: 'small',
        homeTeam: {
          name: 'Cape Breton West Islanders',
          abbr: 'CBW'
        },
        upcomingGames: nextGame ? [transformGame(nextGame)] : []
      },
      medium: {
        size: 'medium',
        homeTeam: {
          name: 'Cape Breton West Islanders', 
          abbr: 'CBW'
        },
        pastResults: pastGames.map(game => transformGame(game, true)),
        upcomingGames: upcomingGames.map(game => transformGame(game))
      },
      large: {
        size: 'large',
        homeTeam: {
          name: 'Cape Breton West Islanders',
          abbr: 'CBW'
        },
        pastResults: pastGames.map(game => transformGame(game, true)),
        upcomingGames: upcomingGames.map(game => transformGame(game))
      }
    }
  }

  private transformStatisticsData(statsData: any): StatisticsData {
    const playerStats = statsData.stats || []
    const goalieStats = statsData.statsG || []
    
    // Get top players
    const topScorer = playerStats[0]
    const topGoals = [...playerStats].sort((a, b) => b.g - a.g)[0]
    const topAssists = [...playerStats].sort((a, b) => b.a - a.a)[0]
    
    return {
      small: {
        size: 'small',
        topScorer: topScorer ? {
          name: `${topScorer.first} ${topScorer.last}`,
          points: topScorer.pts
        } : { name: 'N/A', points: 0 }
      },
      medium: {
        size: 'medium',
        leaders: {
          goals: topGoals ? {
            name: `${topGoals.first} ${topGoals.last}`,
            value: topGoals.g
          } : { name: 'N/A', value: 0 },
          assists: topAssists ? {
            name: `${topAssists.first} ${topAssists.last}`,
            value: topAssists.a
          } : { name: 'N/A', value: 0 },
          points: topScorer ? {
            name: `${topScorer.first} ${topScorer.last}`,
            value: topScorer.pts
          } : { name: 'N/A', value: 0 }
        }
      },
      large: {
        size: 'large',
        players: playerStats.slice(0, 5).map((player: any) => ({
          name: `${player.first} ${player.last}`,
          goals: player.g,
          assists: player.a,
          points: player.pts
        }))
      }
    }
  }

  private transformResultsData(games: any[]): ResultsData {
    // Get finished games only and sort by date (most recent first)
    const finishedGames = games
      .filter(game => game.st === 'F')
      .sort((a, b) => new Date(b.gd).getTime() - new Date(a.gd).getTime())
      .slice(0, 10)
    
    // Transform game data for results format
    const transformResultGame = (game: any) => {
      const isHome = game.h === 1728 // Cape Breton West team ID
      const opponent = isHome ? game.v_n_s : game.h_n_s // Use short names
      const homeScore = game.hs
      const awayScore = game.vs
      const won = isHome ? homeScore > awayScore : awayScore > homeScore
      const teamScore = isHome ? homeScore : awayScore
      const opponentScore = isHome ? awayScore : homeScore
      
      return {
        id: game.g_id,
        date: game.gdl, // "Sat, Aug 23"
        opponent: opponent,
        location: isHome ? 'Home' : 'Away',
        result: `${won ? 'W' : 'L'} ${teamScore}-${opponentScore}`
      }
    }

    const transformedGames = finishedGames.map(transformResultGame)
    const lastGame = transformedGames[0]

    return {
      small: {
        size: 'small',
        lastGame: lastGame ? {
          result: lastGame.result,
          opponent: lastGame.opponent
        } : { result: 'No games', opponent: 'played' }
      },
      medium: {
        size: 'medium',
        recentGames: transformedGames.slice(0, 4)
      },
      large: {
        size: 'large',
        recentGames: transformedGames.slice(0, 6)
      }
    }
  }

  private transformStandingsData(standingsData: any): StandingsData {
    const standings = standingsData.jsonStandings || []
    
    // Transform team data
    const transformTeam = (team: any) => ({
      name: team.sn, // Short name (e.g., "Islanders")
      fullName: team.ln, // Long name (e.g., "Cape Breton West Islanders")
      wins: team.w,
      losses: team.l,
      otl: team.otl,
      gamesPlayed: team.gp,
      points: team.pts,
      goalsFor: team.gf,
      goalsAgainst: team.ga
    })

    const transformedStandings = standings.map(transformTeam)
    
    // Find Cape Breton West position
    const capeBretonIndex = transformedStandings.findIndex(team => team.name === 'Islanders')
    const capeBretonTeam = transformedStandings[capeBretonIndex]

    return {
      small: {
        size: 'small',
        position: capeBretonIndex + 1, // 1-based position
        points: capeBretonTeam ? capeBretonTeam.points : 0
      },
      medium: {
        size: 'medium',
        standings: transformedStandings.slice(0, 5)
      },
      large: {
        size: 'large',
        standings: transformedStandings
      }
    }
  }

  private determineResult(game: any, isHome: boolean): string {
    const homeScore = game.hs
    const awayScore = game.vs
    const won = isHome ? homeScore > awayScore : awayScore > homeScore
    return won ? 'W' : 'L'
  }

  // Clear cache - useful for testing
  clearCache() {
    this.cache = {
      roster: null,
      schedule: null,
      statistics: null,
      results: null,
      standings: null,
      lastUpdated: {}
    }
  }
}

// Export singleton instance
export const dataService = new DataService()
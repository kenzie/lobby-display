export const dummyData = {
  schedule: {
    small: {
      size: 'small',
      nextGame: {
        opponent: 'Truro Bearcats',
        time: '7:00 PM'
      }
    },
    medium: {
      size: 'medium',
      upcomingGames: [
        { id: 1, date: 'Jan 15', opponent: 'Truro Bearcats', time: '7:00 PM' },
        { id: 2, date: 'Jan 18', opponent: 'Halifax McDonalds', time: '7:30 PM' },
        { id: 3, date: 'Jan 22', opponent: 'Dartmouth Whalers', time: '2:00 PM' }
      ]
    },
    large: {
      size: 'large',
      upcomingGames: [
        { id: 1, date: 'Jan 15', opponent: 'Truro Bearcats', time: '7:00 PM' },
        { id: 2, date: 'Jan 18', opponent: 'Halifax McDonalds', time: '7:30 PM' },
        { id: 3, date: 'Jan 22', opponent: 'Dartmouth Whalers', time: '2:00 PM' },
        { id: 4, date: 'Jan 25', opponent: 'Valley Wildcats', time: '7:00 PM' },
        { id: 5, date: 'Jan 28', opponent: 'South Shore Lumberjacks', time: '2:00 PM' }
      ]
    }
  },

  results: {
    small: {
      size: 'small',
      lastGame: {
        result: 'W 5-2',
        opponent: 'Yarmouth Mariners'
      }
    },
    medium: {
      size: 'medium',
      recentGames: [
        { id: 1, date: 'Jan 12', result: 'W 5-2', opponent: 'Yarmouth Mariners' },
        { id: 2, date: 'Jan 10', result: 'L 2-4', opponent: 'Halifax McDonalds' },
        { id: 3, date: 'Jan 8', result: 'W 3-1', opponent: 'Valley Wildcats' }
      ]
    },
    large: {
      size: 'large',
      recentGames: [
        { id: 1, date: 'Jan 12', result: 'W 5-2', opponent: 'Yarmouth Mariners' },
        { id: 2, date: 'Jan 10', result: 'L 2-4', opponent: 'Halifax McDonalds' },
        { id: 3, date: 'Jan 8', result: 'W 3-1', opponent: 'Valley Wildcats' },
        { id: 4, date: 'Jan 5', result: 'W 4-1', opponent: 'South Shore Lumberjacks' },
        { id: 5, date: 'Jan 3', result: 'L 1-3', opponent: 'Truro Bearcats' }
      ]
    }
  },

  standings: {
    small: {
      size: 'small',
      position: '2nd',
      points: 42
    },
    medium: {
      size: 'medium',
      standings: [
        { name: 'Halifax McDonalds', points: 45 },
        { name: 'Cape Breton West', points: 42 },
        { name: 'Truro Bearcats', points: 38 },
        { name: 'Dartmouth Whalers', points: 35 },
        { name: 'Valley Wildcats', points: 32 }
      ]
    },
    large: {
      size: 'large',
      standings: [
        { name: 'Halifax McDonalds', wins: 22, losses: 8, otl: 4, points: 45 },
        { name: 'Cape Breton West', wins: 20, losses: 10, otl: 4, points: 42 },
        { name: 'Truro Bearcats', wins: 18, losses: 12, otl: 4, points: 38 },
        { name: 'Dartmouth Whalers', wins: 16, losses: 14, otl: 4, points: 35 },
        { name: 'Valley Wildcats', wins: 15, losses: 15, otl: 4, points: 32 },
        { name: 'South Shore Lumberjacks', wins: 12, losses: 18, otl: 4, points: 26 },
        { name: 'Yarmouth Mariners', wins: 10, losses: 20, otl: 4, points: 22 }
      ]
    }
  },

  statistics: {
    small: {
      size: 'small',
      topScorer: {
        name: 'Jake MacDonald',
        points: 38
      }
    },
    medium: {
      size: 'medium',
      leaders: {
        goals: { name: 'Liam Campbell', value: 18 },
        assists: { name: 'Jake MacDonald', value: 25 },
        points: { name: 'Jake MacDonald', value: 38 }
      }
    },
    large: {
      size: 'large',
      players: [
        { name: 'Jake MacDonald', goals: 13, assists: 25, points: 38 },
        { name: 'Liam Campbell', goals: 18, assists: 15, points: 33 },
        { name: 'Noah MacLeod', goals: 12, assists: 18, points: 30 },
        { name: 'Carter Smith', goals: 14, assists: 12, points: 26 },
        { name: 'Owen MacKenzie', goals: 9, assists: 16, points: 25 }
      ]
    }
  },

  news: {
    small: {
      size: 'small',
      headline: 'Cape Breton West Moves to 2nd Place'
    },
    medium: {
      size: 'medium',
      headline: 'Cape Breton West Moves to 2nd Place',
      summary: 'With their recent win over Yarmouth, Cape Breton West has moved into second place in the NS U18MHL standings.'
    },
    large: {
      size: 'large',
      articles: [
        {
          id: 1,
          headline: 'Team Signs New Forward',
          summary: 'The organization announced today the signing of a promising young forward to a two-year deal.'
        },
        {
          id: 2,
          headline: 'Goalie Returns from Injury',
          summary: 'Starting goaltender cleared for full practice after missing two weeks with lower body injury.'
        },
        {
          id: 3,
          headline: 'Playoff Push Continues',
          summary: 'Team sits in wild card position with 12 games remaining in regular season.'
        }
      ]
    }
  },

  twitter: {
    small: {
      size: 'small',
      latestTweet: {
        handle: 'ourteam',
        text: 'Great win tonight! Fans were incredible as always. Next game Tuesday at home!'
      }
    },
    medium: {
      size: 'medium',
      tweets: [
        {
          id: 1,
          handle: 'ourteam',
          text: 'Great win tonight! Fans were incredible.',
          time: '2h'
        },
        {
          id: 2,
          handle: 'player23',
          text: 'Thanks for all the support tonight!',
          time: '3h'
        }
      ]
    },
    large: {
      size: 'large',
      tweets: [
        {
          id: 1,
          handle: 'ourteam',
          text: 'Great win tonight! Fans were incredible as always. Next game Tuesday at home!',
          time: '2h'
        },
        {
          id: 2,
          handle: 'player23',
          text: 'Thanks for all the support tonight! Love playing in front of our home crowd.',
          time: '3h'
        },
        {
          id: 3,
          handle: 'coach_smith',
          text: 'Proud of how the team battled back in the third period.',
          time: '4h'
        }
      ]
    }
  },

  sponsors: {
    small: {
      size: 'small',
      sponsor: {
        name: 'Local Bank'
      }
    },
    medium: {
      size: 'medium',
      sponsor: {
        name: 'Local Bank',
        tagline: 'Supporting Our Community'
      }
    },
    large: {
      size: 'large',
      sponsor: {
        name: 'Local Bank',
        tagline: 'Supporting Our Community',
        description: 'Proudly serving the community for over 50 years'
      }
    }
  },

  photos: {
    small: {
      size: 'small',
      photo: {
        caption: 'Championship Victory',
        year: '2019'
      }
    },
    medium: {
      size: 'medium',
      photo: {
        caption: 'Championship Victory',
        year: '2019',
        description: 'The team celebrates their first championship in franchise history'
      }
    },
    large: {
      size: 'large',
      photos: [
        {
          id: 1,
          caption: 'Championship Victory',
          year: '2019',
          description: 'The team celebrates their first championship in franchise history'
        },
        {
          id: 2,
          caption: 'Home Opener',
          year: '2020',
          description: 'Fans pack the arena for the season opener'
        },
        {
          id: 3,
          caption: 'Playoff Run',
          year: '2021',
          description: 'Historic playoff run energizes the city'
        }
      ]
    }
  },

  profiles: {
    small: {
      size: 'small',
      player: {
        number: 97,
        name: 'Connor McDavid',
        position: 'C'
      }
    },
    medium: {
      size: 'medium',
      player: {
        number: 97,
        name: 'Connor McDavid',
        position: 'C',
        hometown: 'Richmond Hill, ON',
        stats: '27G 58A 85P'
      }
    },
    large: {
      size: 'large',
      players: [
        {
          id: 1,
          number: 97,
          name: 'Connor McDavid',
          position: 'C',
          hometown: 'Richmond Hill, ON',
          bio: 'Team captain and leading scorer, known for incredible speed and playmaking ability.'
        },
        {
          id: 2,
          number: 29,
          name: 'Leon Draisaitl',
          position: 'C',
          hometown: 'Cologne, Germany',
          bio: 'Versatile forward who can play center or wing, excellent in all situations.'
        }
      ]
    }
  },

  facts: {
    small: {
      size: 'small',
      fact: {
        text: 'Our arena holds 18,500 fans'
      }
    },
    medium: {
      size: 'medium',
      fact: {
        text: 'Our arena holds 18,500 fans and opened in 1996'
      }
    },
    large: {
      size: 'large',
      facts: [
        {
          id: 1,
          text: 'Our arena holds 18,500 fans and opened in 1996',
          category: 'Arena Facts'
        },
        {
          id: 2,
          text: 'The team was founded in 1972',
          category: 'History'
        },
        {
          id: 3,
          text: 'We have retired 6 jersey numbers',
          category: 'Honors'
        }
      ]
    }
  }
}
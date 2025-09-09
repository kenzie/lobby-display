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
        handle: '@CBWestIslanders',
        text: 'Great win tonight! Fans were incredible as always. Next game Tuesday at home!'
      }
    },
    medium: {
      size: 'medium',
      tweets: [
        {
          id: 1,
          handle: '@CBWestIslanders',
          text: 'Great win tonight! Fans were incredible.',
          time: '2h'
        },
        {
          id: 2,
          handle: '@JakeMacD19',
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
          handle: '@CBWestIslanders',
          text: 'Great win tonight! Fans were incredible as always. Next game Tuesday at home!',
          time: '2h'
        },
        {
          id: 2,
          handle: '@JakeMacD19',
          text: 'Thanks for all the support tonight! Love playing in front of our home crowd.',
          time: '3h'
        },
        {
          id: 3,
          handle: '@CoachMacKenzie',
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
        name: 'Credit Union Atlantic'
      }
    },
    medium: {
      size: 'medium',
      sponsor: {
        name: 'Credit Union Atlantic',
        tagline: 'Supporting Cape Breton Hockey'
      }
    },
    large: {
      size: 'large',
      sponsor: {
        name: 'Credit Union Atlantic',
        tagline: 'Supporting Cape Breton Hockey',
        description: 'Proudly serving Cape Breton communities for over 80 years'
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
        number: 19,
        name: 'Jake MacDonald',
        position: 'C'
      }
    },
    medium: {
      size: 'medium',
      player: {
        number: 19,
        name: 'Jake MacDonald',
        position: 'C',
        hometown: 'Sydney, NS',
        stats: '13G 25A 38P'
      }
    },
    large: {
      size: 'large',
      players: [
        {
          id: 1,
          number: 19,
          name: 'Jake MacDonald',
          position: 'C',
          hometown: 'Sydney, NS',
          bio: 'Team captain and leading scorer, known for incredible vision and leadership.'
        },
        {
          id: 2,
          number: 27,
          name: 'Liam Campbell',
          position: 'RW',
          hometown: 'Glace Bay, NS',
          bio: 'Leading goal scorer with a powerful shot, exciting young talent.'
        }
      ]
    }
  },

  videos: {
    small: {
      size: 'small',
      title: 'Player Highlights',
      duration: '1:15'
    },
    medium: {
      size: 'medium',
      title: 'Game Highlights',
      duration: '2:34',
      description: 'Best moments from recent games'
    },
    large: {
      size: 'large',
      title: 'Cape Breton West Highlights',
      duration: '3:21',
      description: 'Amazing plays and goals from our talented players',
      date: 'Season 2024',
      category: 'Highlights'
    }
  },

  facts: {
    small: {
      size: 'small',
      fact: {
        text: 'Cape Breton Centre holds 3,500 fans'
      }
    },
    medium: {
      size: 'medium',
      fact: {
        text: 'Cape Breton Centre holds 3,500 fans and opened in 1988'
      }
    },
    large: {
      size: 'large',
      facts: [
        {
          id: 1,
          text: 'Cape Breton Centre holds 3,500 fans and opened in 1988',
          category: 'Arena Facts'
        },
        {
          id: 2,
          text: 'The Cape Breton West Islanders were founded in 1988',
          category: 'History'
        },
        {
          id: 3,
          text: 'We have won 3 NS U18MHL championships',
          category: 'Honors'
        }
      ]
    }
  }
}
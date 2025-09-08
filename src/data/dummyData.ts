export const dummyData = {
  schedule: {
    small: {
      size: 'small',
      nextGame: {
        opponent: 'Rangers',
        time: '7:30 PM'
      }
    },
    medium: {
      size: 'medium',
      upcomingGames: [
        { id: 1, date: 'Mar 15', opponent: 'Rangers', time: '7:30 PM' },
        { id: 2, date: 'Mar 18', opponent: 'Bruins', time: '8:00 PM' },
        { id: 3, date: 'Mar 22', opponent: 'Leafs', time: '7:00 PM' }
      ]
    },
    large: {
      size: 'large',
      upcomingGames: [
        { id: 1, date: 'Mar 15', opponent: 'Rangers', time: '7:30 PM' },
        { id: 2, date: 'Mar 18', opponent: 'Bruins', time: '8:00 PM' },
        { id: 3, date: 'Mar 22', opponent: 'Leafs', time: '7:00 PM' },
        { id: 4, date: 'Mar 25', opponent: 'Flyers', time: '7:30 PM' },
        { id: 5, date: 'Mar 28', opponent: 'Capitals', time: '8:00 PM' }
      ]
    }
  },

  results: {
    small: {
      size: 'small',
      lastGame: {
        result: 'W 4-2',
        opponent: 'Devils'
      }
    },
    medium: {
      size: 'medium',
      recentGames: [
        { id: 1, date: 'Mar 12', result: 'W 4-2', opponent: 'Devils' },
        { id: 2, date: 'Mar 10', result: 'L 1-3', opponent: 'Penguins' },
        { id: 3, date: 'Mar 8', result: 'W 3-1', opponent: 'Islanders' }
      ]
    },
    large: {
      size: 'large',
      recentGames: [
        { id: 1, date: 'Mar 12', result: 'W 4-2', opponent: 'Devils' },
        { id: 2, date: 'Mar 10', result: 'L 1-3', opponent: 'Penguins' },
        { id: 3, date: 'Mar 8', result: 'W 3-1', opponent: 'Islanders' },
        { id: 4, date: 'Mar 5', result: 'W 5-2', opponent: 'Sabres' },
        { id: 5, date: 'Mar 3', result: 'L 2-4', opponent: 'Lightning' }
      ]
    }
  },

  standings: {
    small: {
      size: 'small',
      position: '3rd',
      points: 85
    },
    medium: {
      size: 'medium',
      standings: [
        { name: 'Panthers', points: 95 },
        { name: 'Rangers', points: 88 },
        { name: 'Our Team', points: 85 },
        { name: 'Devils', points: 82 },
        { name: 'Penguins', points: 78 }
      ]
    },
    large: {
      size: 'large',
      standings: [
        { name: 'Panthers', wins: 45, losses: 25, otl: 12, points: 95 },
        { name: 'Rangers', wins: 42, losses: 28, otl: 12, points: 88 },
        { name: 'Our Team', wins: 40, losses: 30, otl: 12, points: 85 },
        { name: 'Devils', wins: 38, losses: 32, otl: 12, points: 82 },
        { name: 'Penguins', wins: 35, losses: 35, otl: 12, points: 78 },
        { name: 'Sabres', wins: 32, losses: 38, otl: 12, points: 72 }
      ]
    }
  },

  statistics: {
    small: {
      size: 'small',
      topScorer: {
        name: 'Connor McDavid',
        points: 85
      }
    },
    medium: {
      size: 'medium',
      leaders: {
        goals: { name: 'Alex Ovechkin', value: 42 },
        assists: { name: 'Connor McDavid', value: 58 },
        points: { name: 'Connor McDavid', value: 85 }
      }
    },
    large: {
      size: 'large',
      players: [
        { name: 'Connor McDavid', goals: 27, assists: 58, points: 85 },
        { name: 'Leon Draisaitl', goals: 35, assists: 40, points: 75 },
        { name: 'Nathan MacKinnon', goals: 30, assists: 42, points: 72 },
        { name: 'Mikko Rantanen', goals: 28, assists: 44, points: 72 },
        { name: 'David Pastrnak', goals: 38, assists: 32, points: 70 }
      ]
    }
  },

  news: {
    small: {
      size: 'small',
      headline: 'Team Signs New Forward'
    },
    medium: {
      size: 'medium',
      headline: 'Team Signs New Forward',
      summary: 'The organization announced today the signing of a promising young forward to a two-year deal.'
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
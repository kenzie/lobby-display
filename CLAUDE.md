# Hockey Lobby Display

## Overview
Vue.js app for displaying hockey team content on an 85" TV via Chromium kiosk mode.
First implementation: **Cape Breton West Islanders** (Nova Scotia U18 Major Hockey League)

## Architecture

### Layout
- 3 equal columns visible on screen at once
- Each column = 3 rows total height
- A new fourth column is built just off-screen to the right
- Continuous sliding animation from left to right

### Content Types
1. **Schedule** - Upcoming games
2. **Results** - Recent game results  
3. **Standings** - Team/league positions
4. **Statistics** - Player/team stats
5. **News** - Team announcements
6. **Twitter** - Social media feed
7. **Sponsors** - Sponsor content
8. **Photos** - Historic team moments
9. **Videos** - Highlights and history (no audio)
10. **Profiles** - Player spotlights with photos
11. **Facts** - Did-you-know content

### Content Sizes
- **Small** (1 row): Brief info display
- **Medium** (2 rows): Enhanced info with details  
- **Large** (3 rows): Full detailed content

### Technical Implementation
- **Framework**: Vue 3 with Composition API
- **Styling**: Tailwind CSS v4 with PostCSS
- **Animation**: CSS transforms with linear easing
- **Data**: Dummy json data structure ready for real API integration
- **Content Logic**: Prevents duplicate content types on screen, ensures each content type variant gets shown on a regular basis
- **Organization**: Arrange files in folders to keep everything oranized

## Usage Commands
```bash
npm run dev      # Preview in development server with no animation
npm run preview  # Preview built app with 5s animation
npm run build    # Build for production with 30s animation
```

## Next Steps
- Replace dummy data with real Cape Breton West team data
- Implement daily data update/caching system
- Add content priority weighting system

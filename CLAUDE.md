# Hockey Lobby Display

## Overview
Vue.js app for displaying hockey team content on an 85" TV via Chromium kiosk mode.
First implementation: **Nova Scotia U18 Major Hockey League Islanders** (https://islanders.nsu18mhl.ca/)

## Current Status - COMPLETED ✅
- ✅ Vue.js project with Vite and TypeScript
- ✅ Tailwind CSS for styling  
- ✅ 3-column sliding layout with continuous animation
- ✅ Dark theme with light borders/text
- ✅ Content blocks with 3 height options (1, 2, 3 rows)
- ✅ 10 content types implemented
- ✅ Random content generation system
- ✅ Development borders for visibility

## Architecture

### Layout
- 3 equal columns visible at once
- Each column = 3 rows total height
- Continuous sliding animation (5s dev / 30s production)
- Dark background with light gray borders and white text

### Content Types
1. **Schedule** - Upcoming games
2. **Results** - Recent game results  
3. **Standings** - Team/league positions
4. **Statistics** - Player/team stats
5. **News** - Team announcements
6. **Twitter** - Social media feed
7. **Sponsors** - Sponsor content
8. **Photos** - Historic team moments
9. **Profiles** - Player spotlights
10. **Facts** - Did-you-know content

### Content Sizes
- **Small** (1 row): Brief info display
- **Medium** (2 rows): Enhanced info with details  
- **Large** (3 rows): Full detailed content

### Technical Implementation
- **Framework**: Vue 3 with Composition API
- **Styling**: Tailwind CSS v4 with PostCSS
- **Animation**: CSS transforms with linear easing
- **Data**: Dummy data structure ready for real API integration
- **Content Logic**: Prevents duplicate content types on screen

## Next Steps
- Replace dummy data with real Islanders team data
- Implement daily data caching system
- Add content priority weighting system
- Deploy for kiosk environment testing 

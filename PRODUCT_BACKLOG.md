# Product Backlog - DevTalk

## 🟢 Phase 1: Foundation & Infrastructure (Current Focus)
- [x] **CI/CD Pipeline Fix**: Resolve Prisma 7 deployment issues on Jenkins.
- [x] **Authentication**: Clerk integration for Sign In/Up.
- [x] **Type Safety**: Remove `any` and inline type workarounds in `app/lobbies/page.tsx` and ensure Prisma generator runs correctly in dev/prod.
- [ ] **Base UI Layout**: Responsive Navigation Bar and Footer.

## 🟡 Phase 2: Core Loop - "Real-time Connections"
### Epic: Lobbies
- [ ] **Create Lobby**: User can start a lobby with a topic and max participants.
- [ ] **Join Lobby**: User can join an existing lobby.
- [ ] **Real-time Status**: Lobby status updates (WAITING -> LIVE -> ENDED) using Pusher.
- [ ] **Chat/Voice**: Integrate text chat (Pusher) and Voice (agora/livekit?) inside a lobby.

### Epic: Content Machine
- [ ] **Article CRUD**: Users can write, publish, and read articles.
- [ ] **Meme Upload**: Upload images with captions (UploadThing integration).
- [ ] **Podcast Recording**: Simple audio upload/recording interface.

## 🔵 Phase 3: Engagement & Gamification
### Epic: User Profile
- [ ] **Tech Stack**: Users can select their tech stack (React, Node, etc.) in their profile.
- [ ] **Points System**: Award points for:
    - Hosting a lobby (+50)
    - Publishing an article (+20)
    - Reading an article (+1)
- [ ] **Leaderboard**: Top developers by points/engagement.

## 🔴 Technical Debt & Maintenance
- [ ] **E2E Testing**: Expand Playwright tests for Lobby creation flow.
- [ ] **SEO**: Add metadata and OpenGraph tags for shareability.
- [ ] **Performance**: Optimize image loading and database queries.

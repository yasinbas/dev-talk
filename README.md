# DevTalk - Social Platform for Developers

A real-time social platform built for developers to connect, share knowledge (articles, podcasts), and engage in live audio/chat lobbies.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL (via Docker) + Prisma ORM 7
- **Authentication**: Clerk
- **Real-time**: Pusher (WebSockets)
- **Styling**: Tailwind CSS v4
- **Deployment**: Jenkins CI/CD + Docker (Production)

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js 20+
- Docker & Docker Compose

### 2. Environment Setup
Copy the example environment file:
```bash
cp .env.example .env
```
Fill in your credentials (Clerk, Pusher, Database URL).

### 3. Start Database
Run PostgreSQL via Docker:
```bash
docker-compose up -d db
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Run Database Migrations
Push the Prisma schema to your local database:
```bash
npx prisma db push
```

### 6. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📂 Project Structure

- `/app` - Next.js App Router pages and API routes.
  - `/api` - Backend endpoints (Articles, Lobbies, etc.).
  - `/lobbies` - Real-time lobby features.
- `/components` - Reusable UI components (buttons, dialogs).
- `/lib` - Utility functions (DB connection, Auth helpers, Points logic).
- `/prisma` - Database schema and client generation.
- `.env` - Environment variables (Subject to gitignore).
- `Jenkinsfile` - CI/CD pipeline configuration.

## 🔄 Deployment

This project uses **Jenkins** for continuous integration and deployment.
- **Push to Main**: Triggers build, test, and deployment to production server.
- **Docker**: Application runs in a containerized environment (`devtalk-app`).

## 🧪 Testing

Run unit tests:
```bash
npm test
```
Run E2E tests (Playwright):
```bash
npx playwright test
```

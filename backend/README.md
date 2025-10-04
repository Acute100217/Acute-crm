# Acute CRM - Backend (Starter)
## Setup
1. Copy `.env.example` to `.env` and set DATABASE_URL and JWT_SECRET.

2. Install dependencies:

   npm install


3. Run Prisma migrations (after configuring DB):


   npx prisma generate

   npx prisma migrate dev --name init


4. Start server:


   npm run dev


NOTE: userRoutes is an in-memory stub. Replace with Prisma DB operations in production.

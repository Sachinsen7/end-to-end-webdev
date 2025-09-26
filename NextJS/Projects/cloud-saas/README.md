# Cloud SaaS Video Platform

This is a [Next.js](https://nextjs.org) SaaS project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It provides a video platform with upload, listing, and download functionality.

## Technologies Used

- Next.js (App Router)
- React
- TypeScript
- Prisma ORM
- Clerk (Authentication)
- Neon DB
- Daisy UI

## Features

- Video upload and management
- Video listing with preview cards
- Download videos directly from the UI
- Authentication via Clerk
- Responsive UI with [Tailwind CSS](https://tailwindcss.com)
- Optimized fonts using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) ([Geist](https://vercel.com/font))
- Prisma ORM for database access

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser to see the app.

## Project Structure

- app/ – Next.js app directory (routes, pages, API)
- components/ – Reusable React components
- prisma/ – Prisma schema and migrations
- public/ – Static assets
- types/ – TypeScript types

## Environment Variables

Create a .env file in the root and add your environment variables as needed (e.g., database connection, Clerk keys).

## Deployment

Deploy easily on Vercel.

See Next.js deployment documentation for more details.

## Learn More

- Next.js Documentation
- Prisma Documentation
- Clerk Documentation
- Tailwind CSS Documentation


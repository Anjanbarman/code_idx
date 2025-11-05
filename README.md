This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
# code_idx

A personal Next.js + Prisma template for building authenticated playgrounds/projects with favorites (star) functionality.

This repository demonstrates a Next.js App Router app using:

- Next.js (App Router)
- NextAuth for authentication (GitHub + Google providers configured)
- Prisma as ORM (project uses MongoDB in some setups; adapt as needed)
- shadcn/ui-style components and Radix UI primitives for the UI
- Tailwind CSS for styling

## Features

- Email-less OAuth sign in with GitHub and Google
- Prisma-backed models for users, accounts, playgrounds/projects, and star/favorite markers
- CRUD for playgrounds (create, update, duplicate, delete)
- Toggleable favorites ("Add to Favorite" / "Remove Favorite") with server-side persistence
- Simple dashboard with a sidebar that lists starred and recent playgrounds

## Quickstart (Windows / cmd.exe)

Prerequisites

- Node.js 18+ (or a matching version for your environment)
- npm (or your preferred package manager)
- A database supported by Prisma (the project has been developed with a MongoDB provider in mind; adjust steps below if you use Postgres/MySQL)

1. Install dependencies

```cmd
npm install
```

2. Create environment variables

Create a `.env` file in the project root with the following variables (example values shown as placeholders):

```text
DATABASE_URL="your-database-connection-string"
NEXTAUTH_URL="http://localhost:3000"
AUTH_SECRET="a-long-random-secret"

# GitHub OAuth
AUTH_GITHUB_ID="your_github_client_id"
AUTH_GITHUB_SECRET="your_github_client_secret"

# Google OAuth
AUTH_GOOGLE_CLIENT_ID="your_google_client_id"
AUTH_GOOGLE_CLIENT_SECRET="your_google_client_secret"
```

Important notes:
- Set `NEXTAUTH_URL` to the base URL where the app will run (include protocol and port if not default).
- Configure the OAuth redirect URLs in GitHub and Google developer consoles to match `NEXTAUTH_URL` (e.g., `http://localhost:3000/api/auth/callback/google`).

3. Prisma setup

If you are using a SQL provider (Postgres/MySQL) with Prisma, run migrations:

```cmd
npx prisma migrate dev --name init
```

If you are using MongoDB (the default used in some dev flows), push the Prisma schema to the database:

```cmd
npx prisma db push
```

Generate the Prisma client (needed any time `schema.prisma` changes):

```cmd
npx prisma generate
```

4. Run the development server

```cmd
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

The project `package.json` includes the following scripts:

- `npm run dev` — start Next.js in development (Turbopack configured)
- `npm run build` — build the Next.js app
- `npm run start` — start the built app
- `npm run lint` — run ESLint

## Important files & folders

- `app/` — Next.js App Router routes and layouts
- `app/(auth)` — auth-related pages/layouts
- `app/dashboard` — protected dashboard routes and components
- `modules/auth` — sign-in UI, user button, auth hooks
- `modules/dashboard` — actions (server actions) and UI components for playgrounds
- `lib/db.ts` — Prisma client singleton
- `prisma/schema.prisma` — Prisma models (User, Account, Playground, StarMarker, etc.)


Small PRs welcome. Prefer small, focused changes:
- Add tests or a small demo for new components
- Keep UI and server changes separate

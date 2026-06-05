# Cumpani

Cumpani is a South African platform that facilitates consensual adult social and entertainment interactions. Cumpanions who appear on the platform are independent contractors and are responsible for their own services and compliance with applicable laws. Cumpani is a technology platform that connects consenting adults and provides tools for booking, payments, scheduling, and verification. Cumpani does not provide adult services directly and does not employ or direct Cumpanions.

Important notes:
- All interactions supported by this platform are between consenting adults only.
- Cumpani discourages and does not support any activity that is illegal or non-consensual.
- Users and Cumpanions are responsible for confirming local legal requirements and for their own safety.

Project overview

This repository contains a starter Next.js 15 (App Router) application implemented with TypeScript, Tailwind CSS, Prisma (PostgreSQL), Auth.js (Prisma adapter), Redis, and Stripe. It includes a Docker Compose setup for local development with Postgres and Redis, and CI configured with GitHub Actions.

What's included

- Next.js 15 App Router with TypeScript
- Tailwind CSS for styling
- Prisma ORM with a starter schema for User and Cumpanion models
- Auth.js scaffold using Prisma adapter
- Redis client setup (ioredis)
- Stripe client and webhook placeholder
- Docker Compose for local dev (Postgres + Redis + app)
- ESLint + Prettier configuration
- Husky + lint-staged pre-commit hooks
- GitHub Actions workflow for CI (install, typecheck, lint, build)

Getting started (local)

1. Copy .env.example to .env and fill in secrets

2. Start local services with Docker Compose

   docker-compose up -d --build

3. Install dependencies

   npm ci

4. Generate Prisma client and run migrations

   npx prisma generate
   # when ready to create schema migration
   npx prisma migrate dev --name init

5. Start the dev server

   npm run dev

Authentication

This starter includes Auth.js (server-side configuration placeholder) and a Prisma schema compatible with using the Prisma adapter. You will need to add OAuth provider configuration in src/lib/auth.ts or in an API route where you initialize Auth.js.

Payments

Stripe is included via the stripe library. Add your STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET to .env and implement webhook handling in src/app/api/stripe/webhook/route.ts.

Development notes

- Husky: After cloning, run npm run prepare to install Husky hooks.
- Linting: npm run lint
- Formatting: npm run format

Security & legal

This repository is a technical scaffold and does not include legal documents, age-verification, KYC, or content-moderation systems. Before launching any real platform that facilitates adult interactions, consult legal counsel and implement robust safety, verification, and moderation processes. Ensure compliance with South African law and any other jurisdictions where you operate.

Contributing

Please follow the standard GitHub workflow. Install Husky (npm run prepare) and respect linting/formatting rules. Open PRs against main or master and ensure CI checks pass.

License

Add a license as appropriate for your project.

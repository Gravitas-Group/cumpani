import { auth } from '@auth/core'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from './prisma'

// NOTE: This file provides a thin wrapper for Auth.js configuration.
// Fill Providers in server-side route (e.g. src/app/api/auth/[...auth]/route.ts)

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  // providers: [] // add OAuth providers here
}

export default async function getAuth(req: Request) {
  return auth(authOptions, req as any)
}

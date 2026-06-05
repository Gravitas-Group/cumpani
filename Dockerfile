# Dockerfile for local development
# Uses Node 20 LTS image
FROM node:20-alpine AS base
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN apk add --no-cache libc6-compat python3 g++ make && \
  npm ci --legacy-peer-deps

# Copy rest
COPY . .

# Build
RUN npm run prisma:generate || true
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=base /app/ .

EXPOSE 3000
CMD ["npm", "start"]

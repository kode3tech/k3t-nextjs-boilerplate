# Multi-stage build to optimize image size

# Stage 1: Base
FROM node:22-alpine AS base

# Install required dependencies
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Stage 2: Dependencies
FROM base AS deps

# Copy dependency files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --omit=dev --ignore-scripts

# Stage 3: Builder
FROM base AS builder

WORKDIR /app

# Copy installed dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# Install all dependencies (including dev) for build
RUN npm ci --ignore-scripts

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Run build
RUN npm run build

# Stage 4: Runner (final image)
FROM node:22-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public files
COPY --from=builder /app/public ./public

# Copy Next.js build files
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set user
USER nextjs

# Expose port
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Command to start the application
CMD ["node", "server.js"]

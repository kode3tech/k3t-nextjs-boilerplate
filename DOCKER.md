# 🐳 Docker Guide

This guide explains how to use the Docker support included in the K3T Next.js Boilerplate.

## 📋 Overview

The project includes complete Docker support with:

- **Optimized Dockerfile** with multi-stage build
- **Dockerfile.dev** for development
- **docker-compose.yml** for orchestration
- **Convenience script** (`docker.sh`) for common operations
- **Production configuration** optimized for minimal image size

## 🚀 Quick Start

### Using the Convenience Script

```bash
# Build and run (production)
./docker.sh build
./docker.sh run

# Access at http://localhost:3000
```

### Development

```bash
# Build and run (development)
./docker.sh build-dev
./docker.sh run-dev

# Access at http://localhost:3001
# Hot reload enabled
```

## 📦 Dockerfile Structure

### Dockerfile (Production)

- **Stage 1 (base)**: Base setup with Node.js Alpine
- **Stage 2 (deps)**: Production dependencies installation
- **Stage 3 (builder)**: Application build
- **Stage 4 (runner)**: Optimized final image

**Features:**

- Final image ~100MB
- Non-root user for security
- Next.js standalone output
- Only necessary files

### Dockerfile.dev (Development)

- Simplified configuration for development
- All dependencies included
- Hot reload support with volumes

## 🔧 Available Commands

### docker.sh Script

```bash
./docker.sh build          # Build production image
./docker.sh build-dev      # Build development image
./docker.sh run            # Run production container
./docker.sh run-dev        # Run development container
./docker.sh stop           # Stop containers
./docker.sh clean          # Remove containers and images
./docker.sh logs           # View logs
./docker.sh shell          # Enter container
./docker.sh compose-up     # Start with docker-compose
./docker.sh compose-down   # Stop docker-compose
./docker.sh help           # Show help
```

### NPM Scripts

```bash
npm run docker:build       # Build production image
npm run docker:build-dev   # Build development image
npm run docker:run         # Run production container
npm run docker:run-dev     # Run development container
npm run docker:stop        # Stop containers
npm run docker:clean       # Clean containers and images
npm run docker:logs        # View logs
npm run docker:compose-up  # Start with docker-compose
npm run docker:compose-down # Stop docker-compose
```

## 🔄 Docker Compose

### Production

```bash
docker-compose up -d
```

### Development

```bash
docker-compose --profile dev up -d
```

## ⚙️ Configuration

### Environment Variables

Copy `.env.docker.example` to `.env.local` and configure:

```bash
cp .env.docker.example .env.local
```

### Ports

- **Production**: 3000
- **Development**: 3001

### Volumes (Development)

- Source code: `./:/app`
- Node modules: `/app/node_modules`

## 🏗️ Custom Build

### Build Arguments

```bash
docker build \
  --build-arg NODE_ENV=production \
  --build-arg NEXT_TELEMETRY_DISABLED=1 \
  -t my-app .
```

### Optimizations

1. **Multi-stage build** reduces final size
2. **.dockerignore** excludes unnecessary files
3. **Alpine Linux** for smaller footprint
4. **Standalone output** from Next.js
5. **Non-root user** for security

## 🔍 Troubleshooting

### Container won't start

```bash
# Check logs
./docker.sh logs

# Check if port is in use
lsof -i :3000
```

### Build issues

```bash
# Clear cache
docker system prune -a

# Build without cache
docker build --no-cache -t k3t-nextjs-boilerplate .
```

### Hot reload issues (dev)

Make sure volumes are mounted correctly:

```bash
docker run -v $(pwd):/app -v /app/node_modules ...
```

## 📊 Image Sizes

- **Production**: ~100MB
- **Development**: ~400MB

## 🚀 Deploy

### Registry

```bash
# Tag for registry
docker tag k3t-nextjs-boilerplate registry.com/my-app:v1.0.0

# Push
docker push registry.com/my-app:v1.0.0
```

### Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nextjs-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nextjs-app
  template:
    metadata:
      labels:
        app: nextjs-app
    spec:
      containers:
        - name: nextjs-app
          image: k3t-nextjs-boilerplate:latest
          ports:
            - containerPort: 3000
```

## 🔐 Security

- Non-root user (nextjs:nodejs)
- Minimal Alpine base image
- Production dependencies only
- Secrets via environment variables

## 📝 Best Practices

1. Use multi-stage builds
2. Minimize layers
3. Use .dockerignore
4. Run as non-root user
5. Set explicit versions
6. Use health checks
7. Configure resource limits

#!/bin/bash

# Script to facilitate Docker operations for Next.js project

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Image name
IMAGE_NAME="k3t-nextjs-boilerplate"
CONTAINER_NAME="k3t-nextjs-app"

# Function to show help
show_help() {
    echo -e "${BLUE}Usage: ./docker.sh [COMMAND]${NC}"
    echo ""
    echo "Available commands:"
    echo -e "  ${GREEN}build${NC}          Build production Docker image"
    echo -e "  ${GREEN}build-dev${NC}      Build development Docker image"
    echo -e "  ${GREEN}run${NC}            Run production container"
    echo -e "  ${GREEN}run-dev${NC}        Run development container"
    echo -e "  ${GREEN}stop${NC}           Stop containers"
    echo -e "  ${GREEN}clean${NC}          Remove containers and images"
    echo -e "  ${GREEN}logs${NC}           View container logs"
    echo -e "  ${GREEN}shell${NC}          Enter running container"
    echo -e "  ${GREEN}compose-up${NC}     Start services with docker-compose"
    echo -e "  ${GREEN}compose-down${NC}   Stop docker-compose services"
    echo -e "  ${GREEN}help${NC}           Show this help"
}

# Function to build production image
build_prod() {
    echo -e "${YELLOW}Building production image...${NC}"
    docker build -t ${IMAGE_NAME}:latest .
    echo -e "${GREEN}Image built successfully!${NC}"
}

# Function to build development image
build_dev() {
    echo -e "${YELLOW}Building development image...${NC}"
    docker build -f Dockerfile.dev -t ${IMAGE_NAME}:dev .
    echo -e "${GREEN}Development image built successfully!${NC}"
}

# Function to run production container
run_prod() {
    echo -e "${YELLOW}Running production container...${NC}"
    docker run -d \
        --name ${CONTAINER_NAME} \
        -p 3000:3000 \
        --restart unless-stopped \
        ${IMAGE_NAME}:latest
    echo -e "${GREEN}Container started! Access: http://localhost:3000${NC}"
}

# Function to run development container
run_dev() {
    echo -e "${YELLOW}Running development container...${NC}"
    docker run -d \
        --name ${CONTAINER_NAME}-dev \
        -p 3001:3000 \
        -v "$(pwd):/app" \
        -v /app/node_modules \
        ${IMAGE_NAME}:dev
    echo -e "${GREEN}Development container started! Access: http://localhost:3001${NC}"
}

# Function to stop containers
stop_containers() {
    echo -e "${YELLOW}Stopping containers...${NC}"
    docker stop ${CONTAINER_NAME} 2>/dev/null || true
    docker stop ${CONTAINER_NAME}-dev 2>/dev/null || true
    docker rm ${CONTAINER_NAME} 2>/dev/null || true
    docker rm ${CONTAINER_NAME}-dev 2>/dev/null || true
    echo -e "${GREEN}Containers stopped and removed!${NC}"
}

# Function for cleanup
clean() {
    echo -e "${YELLOW}Cleaning containers and images...${NC}"
    stop_containers
    docker rmi ${IMAGE_NAME}:latest 2>/dev/null || true
    docker rmi ${IMAGE_NAME}:dev 2>/dev/null || true
    docker system prune -f
    echo -e "${GREEN}Cleanup completed!${NC}"
}

# Function to view logs
show_logs() {
    echo -e "${YELLOW}Showing container logs...${NC}"
    if docker ps | grep -q ${CONTAINER_NAME}; then
        docker logs -f ${CONTAINER_NAME}
    elif docker ps | grep -q ${CONTAINER_NAME}-dev; then
        docker logs -f ${CONTAINER_NAME}-dev
    else
        echo -e "${RED}No running container found!${NC}"
    fi
}

# Function to enter container
enter_shell() {
    echo -e "${YELLOW}Entering container...${NC}"
    if docker ps | grep -q ${CONTAINER_NAME}; then
        docker exec -it ${CONTAINER_NAME} /bin/sh
    elif docker ps | grep -q ${CONTAINER_NAME}-dev; then
        docker exec -it ${CONTAINER_NAME}-dev /bin/sh
    else
        echo -e "${RED}No running container found!${NC}"
    fi
}

# Function for docker-compose up
compose_up() {
    echo -e "${YELLOW}Starting services with docker-compose...${NC}"
    docker-compose up -d
    echo -e "${GREEN}Services started!${NC}"
}

# Function for docker-compose down
compose_down() {
    echo -e "${YELLOW}Stopping docker-compose services...${NC}"
    docker-compose down
    echo -e "${GREEN}Services stopped!${NC}"
}

# Process command
case "$1" in
    "build")
        build_prod
        ;;
    "build-dev")
        build_dev
        ;;
    "run")
        run_prod
        ;;
    "run-dev")
        run_dev
        ;;
    "stop")
        stop_containers
        ;;
    "clean")
        clean
        ;;
    "logs")
        show_logs
        ;;
    "shell")
        enter_shell
        ;;
    "compose-up")
        compose_up
        ;;
    "compose-down")
        compose_down
        ;;
    "help"|"--help"|"-h")
        show_help
        ;;
    *)
        echo -e "${RED}Invalid command: $1${NC}"
        echo ""
        show_help
        exit 1
        ;;
esac

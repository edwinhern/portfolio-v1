# Makefile for building, running, and shutting down a Docker container for a Next.js portfolio

# Variables
PROJECT_NAME := nextjs-portfolio-v1
DOCKER_IMAGE := $(PROJECT_NAME):latest
CONTAINER_NAME := $(PROJECT_NAME)-container
PORT := 3000

# Default target
.PHONY: all
all: build

# Build the Docker image for production
.PHONY: build
build:
	@echo "Building Docker image..."
	docker build --target runner -t $(DOCKER_IMAGE) .

# Run the Docker container for production
.PHONY: run
run: stop
	@echo "Running Docker container..."
	docker run -d -p $(PORT):3000 --name $(CONTAINER_NAME) $(DOCKER_IMAGE)

# Stop the Docker container for production
.PHONY: stop
stop:
	@echo "Stopping and removing Docker container (if exists)..."
	-docker stop $(CONTAINER_NAME) 2>/dev/null || true
	-docker rm $(CONTAINER_NAME) 2>/dev/null || true

# Shutdown the Docker container
.PHONY: shutdown
shutdown: stop

# Logs for the Docker container
.PHONY: logs
logs:
	@echo "Displaying Docker logs..."
	docker logs -f $(CONTAINER_NAME)

# Clean up Docker image and container
.PHONY: clean
clean: stop
	@echo "Removing Docker image..."
	docker rmi $(DOCKER_IMAGE)
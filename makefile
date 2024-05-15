# Makefile for building, running, and shutting down a Docker container for a Next.js portfolio

# Variables
PROJECT_NAME := nextjs-portfolio
DOCKER_IMAGE := $(PROJECT_NAME):latest
DOCKER_DEV_IMAGE := $(PROJECT_NAME)-dev:latest
CONTAINER_NAME := $(PROJECT_NAME)-container
DEV_CONTAINER_NAME := $(PROJECT_NAME)-dev-container
PORT := 3000

# Default target
.PHONY: all
all: build

# Build the Docker image for production
.PHONY: build
build:
	@echo "Building Docker image..."
	docker build --target runner -t $(DOCKER_IMAGE) .

# Build the Docker image for development
.PHONY: build-dev
build-dev:
	@echo "Building Docker image for development..."
	docker build --target dev -t $(DOCKER_DEV_IMAGE) .

# Run the Docker container for production
.PHONY: run
run: stop
	@echo "Running Docker container..."
	docker run -d -p $(PORT):3000 --name $(CONTAINER_NAME) $(DOCKER_IMAGE)

# Run the Docker container for development
.PHONY: run-dev
run-dev: stop-dev
	@echo "Running Docker container for development..."
	docker run -d -p $(PORT):3000 --name $(DEV_CONTAINER_NAME) $(DOCKER_DEV_IMAGE)

# Stop the Docker container for production
.PHONY: stop
stop:
	@echo "Stopping and removing Docker container (if exists)..."
	-docker stop $(CONTAINER_NAME) 2>/dev/null || true
	-docker rm $(CONTAINER_NAME) 2>/dev/null || true

# Stop the Docker container for development
.PHONY: stop-dev
stop-dev:
	@echo "Stopping and removing Docker container for development (if exists)..."
	-docker stop $(DEV_CONTAINER_NAME) 2>/dev/null || true
	-docker rm $(DEV_CONTAINER_NAME) 2>/dev/null || true

# Shutdown the Docker container
.PHONY: shutdown
shutdown: stop

# Shutdown the Docker container for development
.PHONY: shutdown-dev
shutdown-dev: stop-dev

# Logs for the Docker container
.PHONY: logs
logs:
	@echo "Displaying Docker logs..."
	docker logs -f $(CONTAINER_NAME)

# Logs for the Docker container for development
.PHONY: logs-dev
logs-dev:
	@echo "Displaying Docker logs for development..."
	docker logs -f $(DEV_CONTAINER_NAME)

# Clean up Docker image and container
.PHONY: clean
clean: stop
	@echo "Removing Docker image..."
	docker rmi $(DOCKER_IMAGE)

# Clean up Docker image and container for development
.PHONY: clean-dev
clean-dev: stop-dev
	@echo "Removing Docker image for development..."
	docker rmi $(DOCKER_DEV_IMAGE)
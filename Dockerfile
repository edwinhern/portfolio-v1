# Stage 1: Building the app
FROM node:20-alpine AS builder

# Set the working directory in the Docker container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./
# If you're using Yarn, uncomment the next line and remove the COPY command above
# COPY package.json yarn.lock ./

# Install dependencies
RUN npm ci
# For Yarn, use the following command instead
# RUN yarn install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the Next.js application
RUN npm run build
# For Yarn, use the following command instead
# RUN yarn build

# Stage 2: Run the app in development mode
FROM node:20-alpine AS dev
WORKDIR /app

# Copy only the necessary files for development
COPY package*.json ./
COPY . .

# Install dependencies (in case there are any new ones)
RUN npm ci
# For Yarn, use the following command instead
# RUN yarn install

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the app in development mode
CMD ["npm", "run", "dev"]

# Stage 3: Run the app in production mode
FROM node:20-alpine AS runner
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
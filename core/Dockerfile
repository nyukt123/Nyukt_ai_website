# # -----------------------
# # Build stage
# # -----------------------
# FROM node:20 AS build

# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies (including devDependencies for build)
# RUN npm ci

# # Copy project files
# COPY . .

# # Build React app with Vite
# RUN npm run build

# # -----------------------
# # Production stage
# # -----------------------
# FROM node:20-slim AS prod

# WORKDIR /app

# # Copy only production dependencies
# COPY --from=build /app/package*.json ./
# RUN npm ci --omit=dev

# # Copy the built dist folder
# COPY --from=build /app/dist ./dist

# # Copy server.js
# COPY server.js ./server.js

# # Expose port for Cloud Run
# EXPOSE 8080

# # Start the server
# CMD ["node", "server.js"]


# Stage 1: Build React app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json for dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the React app (output goes to dist/)
RUN npm run build

# Stage 2: Serve with Express
FROM node:20-alpine

WORKDIR /app

# Copy built React app from previous stage
COPY --from=build /app/dist ./dist

# Copy server.js
COPY server.js ./

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Expose the port Cloud Run expects
ENV PORT 8080
EXPOSE 8080

# Start server
CMD ["node", "server.js"]

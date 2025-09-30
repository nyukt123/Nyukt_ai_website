# -----------------------
# Build stage
# -----------------------
FROM node:20 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY core/package*.json ./

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy project files
COPY core/. .

# Build React app with Vite
RUN npm run build

# -----------------------
# Production stage
# -----------------------
FROM node:20-slim AS prod

WORKDIR /app

# Copy only production dependencies
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev

# Copy the built dist folder
COPY --from=build /app/dist ./dist

# Copy server.js
COPY core/server.js ./server.js

# Expose port for Cloud Run
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]

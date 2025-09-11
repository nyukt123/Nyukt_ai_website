# Build stage
FROM node:20-alpine as build
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built files from build stage
COPY --from=build /app/dist ./dist
COPY server.js ./

# Expose the port the app runs on
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]

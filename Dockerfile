# Use a specific Node.js version with Alpine Linux
FROM node:20.11.1-alpine3.18 AS builder

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY core/package*.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY core/ .

# Build the application
RUN npm run build

# Production stage
FROM node:20.11.1-alpine3.18

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache tini

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080

# Use tini as the init process
ENTRYPOINT ["/sbin/tini", "--"]

# Copy package files
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy built assets
COPY --from=builder /app/dist ./dist

# Copy server file
COPY core/server.js ./

# Create a non-root user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

# Expose the port the app runs on
EXPOSE $PORT

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:$PORT/health || exit 1

# Start the server
CMD ["node", "server.js"]
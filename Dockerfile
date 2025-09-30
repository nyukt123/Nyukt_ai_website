# Stage 1: Build the React app with Vite
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json from core folder
COPY core/package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application from core
COPY core/. .

# Build the application
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Install curl for health check/debugging
RUN apk add --no-cache curl

# Create necessary directories
RUN mkdir -p /var/log/nginx /var/cache/nginx /var/run/nginx /usr/share/nginx/html

# Copy the built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration (make sure this file is at repo root or adjust path)
COPY core/nginx.conf /etc/nginx/nginx.conf

# Set environment variables
ENV PORT=8080
ENV HOST=0.0.0.0

# Set working directory
WORKDIR /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1

# Expose port
EXPOSE $PORT

# Create non-root user
RUN addgroup -g 1001 -S nginx-group && \
    adduser -u 1001 -S nginx-user -G nginx-group && \
    chown -R nginx-user:nginx-group /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html

USER nginx-user

# Start nginx
CMD ["sh", "-c", "\
    echo 'Starting nginx...' && \
    echo 'Environment variables:' && env && \
    echo 'Testing nginx config...' && nginx -t && \
    exec nginx -g 'daemon off;'"]

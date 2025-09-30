# Stage 1: Build the React app with Vite
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Install necessary tools for debugging
RUN apk add --no-cache curl

# Create necessary directories
RUN mkdir -p /var/log/nginx /var/cache/nginx /var/run/nginx /usr/share/nginx/html

# Copy the built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Set environment variables
ENV PORT=8080
ENV HOST=0.0.0.0

# Set working directory
WORKDIR /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1

# Expose the port the app runs on
EXPOSE $PORT

# Create a non-root user and switch to it
RUN addgroup -g 1001 -S nginx-group && \
    adduser -u 1001 -S nginx-user -G nginx-group && \
    chown -R nginx-user:nginx-group /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html

# Drop root privileges
USER nginx-user

# Start nginx in the foreground with debug logging
CMD ["sh", "-c", "\
    echo 'Starting nginx...' && \
    echo 'Environment variables:' && env && \
    echo 'Current directory:' && pwd && \
    echo 'Files in /etc/nginx/conf.d/:' && ls -la /etc/nginx/conf.d/ && \
    echo 'Files in /usr/share/nginx/html:' && ls -la /usr/share/nginx/html/ && \
    echo 'Testing nginx config...' && nginx -t && \
    echo 'Starting nginx...' && exec nginx -g 'daemon off;'"



# =========================
# Stage 1: Build the React app with Vite
# =========================
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies first (better layer caching)
COPY core/package*.json ./
RUN npm ci

# Copy source code
COPY core/. .

# Build production-ready files
RUN npm run build


# =========================
# Stage 2: Serve with Nginx
# =========================
FROM nginx:alpine

# Install curl for healthcheck/debugging
RUN apk add --no-cache curl

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config (make sure core/nginx.conf exists)
COPY core/nginx.conf /etc/nginx/nginx.conf

# Environment variables (Cloud Run will set $PORT=8080)
ENV PORT=8080
EXPOSE 8080

# Create non-root user for security
RUN addgroup -g 1001 -S nginx-group && \
    adduser -u 1001 -S nginx-user -G nginx-group && \
    chown -R nginx-user:nginx-group /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html

USER nginx-user

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/ || exit 1

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

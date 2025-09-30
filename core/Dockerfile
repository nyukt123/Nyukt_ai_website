# Stage 1: Build the React app with Vite
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set environment variables
ENV PORT=8080
ENV HOST=0.0.0.0

# Expose the port the app runs on
EXPOSE $PORT

# Replace the port in nginx config with the one from environment variable
RUN sed -i "s/listen\s*8080/listen ${PORT}/g" /etc/nginx/conf.d/default.conf && \
    # Make sure nginx can write to its temp directories
    chmod -R 777 /var/cache/nginx /var/run /var/log/nginx && \
    # Make sure the PID file can be written to
    touch /var/run/nginx.pid && \
    chmod 666 /var/run/nginx.pid

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

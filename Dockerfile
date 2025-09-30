# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY core/package*.json ./
RUN npm install
COPY core/ .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install --only=production
COPY --from=builder /app/dist ./dist
COPY core/server.js ./

# Expose port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
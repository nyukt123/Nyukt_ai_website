# Use Node.js LTS
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine

# Install serve globally
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist /app/dist

# Set working directory
WORKDIR /app

# Expose port (informational only, GCP Run will use PORT env var)
EXPOSE 8080

# Start the server using the PORT environment variable
CMD ["sh", "-c", "serve -s dist -l $PORT"]

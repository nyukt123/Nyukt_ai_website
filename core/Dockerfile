# Use Node.js LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file first
COPY package*.json ./

# Install only prod dependencies (serve included)
RUN npm install --production

# Copy rest of the source code
COPY . .

# Build Vite app
RUN npm run build

# Expose port Cloud Run expects
EXPOSE 8080

# Start app (serve dist on port 8080)
CMD ["npm", "start"]

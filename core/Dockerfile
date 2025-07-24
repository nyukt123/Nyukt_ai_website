# Use official Node image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Build your Vite app
RUN npm run build

# Install Express if it's only a dev dependency
RUN npm install express

# Expose the port
EXPOSE 5173

# Run your server
CMD ["node", "server.cjs"]

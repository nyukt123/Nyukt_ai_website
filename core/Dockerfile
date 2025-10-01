# Stage 1: Build React/Vite app
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy build output from Vite (dist folder)
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run expects the app on PORT=8080
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

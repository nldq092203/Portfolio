# Stage 1: Build the application
FROM node:20-slim AS build

WORKDIR /app

# Clean up node_modules and package-lock.json
RUN rm -rf node_modules package-lock.json

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:20-slim AS production

# Install a lightweight static server
RUN npm install -g serve

COPY --from=build /app/dist /app

EXPOSE 3000
CMD ["serve", "-s", "/app", "-l", "3000"]
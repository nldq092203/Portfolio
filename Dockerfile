# Stage 1: Build the Vite ReactJS application
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using a lightweight Node.js server
FROM node:18-alpine AS production

# Install a lightweight static server
RUN npm install -g serve

# Copy built files from the build stage
COPY --from=build /app/dist /app

# Expose the port for Railway
EXPOSE 3000

# Run the static server
CMD ["serve", "-s", "/app", "-l", "3000"]
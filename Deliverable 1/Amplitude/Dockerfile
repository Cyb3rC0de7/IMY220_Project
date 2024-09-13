# Use node image for base image for all stages
FROM node:20.11.1-alpine as base

# Set working directory for all stages
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies (including devDependencies needed for the build)
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the backend and frontend
RUN npm run build:backend && npm run build:frontend

# Use the production version of node
FROM node:20.11.1-alpine as final

# Set working directory again
WORKDIR /usr/src/app

# Copy built files from the previous stage
COPY --from=base /usr/src/app/backend/dist ./backend/dist
COPY --from=base /usr/src/app/frontend/public ./frontend/public
COPY --from=base /usr/src/app/node_modules ./node_modules

# Expose the port for the backend server
EXPOSE 3000

# Start the backend server
CMD ["node", "backend/dist/server.js"]
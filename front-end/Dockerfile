# Use the official Node.js 21 image
FROM node:21 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight Node.js image for the production environment
FROM node:21-alpine

# Set the working directory
WORKDIR /app

# Copy the build output from the build stage to the production image
COPY --from=build /app/dist ./dist

# Expose the port specified in the .env file
EXPOSE ${APP_PORT}

# Start the application
CMD ["node", "./build/server.js"]

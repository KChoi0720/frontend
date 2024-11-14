# Use the official Node.js image as a base image
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port your app runs on (e.g., 3000 for React)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

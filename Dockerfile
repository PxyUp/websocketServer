# Node baron version use image
FROM node:boron

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN npm install .

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME websocket

# Run app when the container launches
CMD ["node", "app.js"]

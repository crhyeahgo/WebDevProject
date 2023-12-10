# Use the NGINX base image
FROM nginx

# Set the pwd to /app
WORKDIR /app

# Copy the built app from the distribution folder into the docker container
COPY ./dist .

# Copy the nginx configuration file into the docker container
COPY ./docker/nginx.conf /etc/nginx

# Start the nginx server
CMD ["nginx"]

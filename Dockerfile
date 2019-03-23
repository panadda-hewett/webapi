FROM node:8

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

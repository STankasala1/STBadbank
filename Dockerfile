FROM node:alpine

MAINTAINER abelsan <abel@mit.edu>

WORKDIR /app

# copy code, install npm dependencies
COPY server.js /app/server.js
COPY package.json /app/package.json
RUN npm install

# expose the port of your server
EXPOSE 3000

# run app
CMD npm start
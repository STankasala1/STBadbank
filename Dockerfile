FROM node:alpine

MAINTAINER abelsan <abel@mit.edu>

WORKDIR /badbank-master

# copy code, install npm dependencies
COPY index.js /badbank-master/index.js
COPY package.json /badbank-master/package.json
RUN npm install
RUN npm install express
RUN npm install cors
RUN npm install lowdb
RUN npm install

# expose the port of your server
EXPOSE 3000

# run app
CMD npm start

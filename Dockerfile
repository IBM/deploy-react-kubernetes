# base image
FROM node:9.4

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts@1.1.0 -g

# Bundle app source
COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]

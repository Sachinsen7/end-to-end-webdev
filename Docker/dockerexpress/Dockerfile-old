FROM node:22-alpine

# use an official image of node js runtime
WORKDIR /app

# set the working directory inside the container
COPY package*.json ./

# copy the package.json file to the working directory
RUN npm install

# install dependencies
COPY . .

# copy the rest of the application code to the working directory
ENV PORT=3000

CMD ["node", "index.js"]
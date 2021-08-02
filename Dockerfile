FROM node:16

# Create app directory
WORKDIR /usr/src/iarchersiteapp

# Install app dependencies
COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3030

CMD [ "node", "app.js" ]
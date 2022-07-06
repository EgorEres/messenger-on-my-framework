
FROM --platform=linux/amd64 node:16.13.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
RUN ["npm", "run", "build"]
CMD ["npm", "run", "start"]
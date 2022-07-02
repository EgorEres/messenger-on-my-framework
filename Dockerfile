
FROM ubuntu:latest
RUN apt update && apt install -y nodejs && apt install -y npm
CMD node -v
WORKDIR /var/www
COPY . .
RUN npm install
RUN ["npm", "run", "build"]
CMD ["npm", "run", "start"]
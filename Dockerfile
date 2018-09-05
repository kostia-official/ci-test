# Use Node.js LTS version
FROM node:8.11.4-alpine

WORKDIR /app
COPY . /app

RUN npm i

EXPOSE 3000

CMD ["npm", "start"]

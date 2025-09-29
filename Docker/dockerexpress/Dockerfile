# stage one 

FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .


# stage two - production stage
FROM node:22-alpine
WORKDIR /app 
COPY --from=builder /app /app
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]



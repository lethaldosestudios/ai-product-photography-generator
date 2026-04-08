FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY server.js .
# PORT is injected by Railway at runtime; 8080 is the default
EXPOSE 8080
CMD ["node", "server.js"]

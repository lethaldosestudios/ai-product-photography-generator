FROM node:22-alpine
WORKDIR /app
COPY api/package*.json ./
RUN npm install
COPY api/server.js ./
EXPOSE 3001
CMD ["node", "server.js"]

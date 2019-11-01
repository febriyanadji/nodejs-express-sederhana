FROM node:12.13.0-alpine
ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}
WORKDIR /app
COPY src/package*.json ./
RUN npm install
COPY src/ ./
EXPOSE 8080
CMD ["npm", "run", "prod"]
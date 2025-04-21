FROM node:lts-alpine
WORKDIR /app
EXPOSE 80
EXPOSE 443

ENV NODE_ENV=production

COPY . .
RUN npm install --production --silent -g @angular/cli
RUN npm install
CMD ["ng", "serve", "--host", "0.0.0.0"]

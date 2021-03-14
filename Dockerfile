FROM node:10

ARG APP_DIR
WORKDIR $APP_DIR

COPY package.json ./
RUN npm install

RUN npm -g install knex knex-paginate ts-node-dev

COPY . .
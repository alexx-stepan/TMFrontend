FROM node:current-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@9.1.8 --unsafe
COPY . /app

VOLUME ${PWD}:/app
VOLUME /app/node_modules

CMD ng serve --proxy-config proxy.conf.json --host 0.0.0.0

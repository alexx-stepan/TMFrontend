FROM node:12-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@8.3.8 --unsafe
COPY . /app

VOLUME ${PWD}:/app
VOLUME /app/node_modules

EXPOSE 4200

CMD ng serve --host 0.0.0.0

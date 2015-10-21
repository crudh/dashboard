FROM node:latest
MAINTAINER Christian Rudh "christian@rudh.se"

RUN useradd -ms /bin/bash node

WORKDIR /opt

COPY . dashboard

RUN chown -R node:node /opt/dashboard

USER node
ENV HOME /home/node

WORKDIR /opt/dashboard

RUN npm install

RUN ./node_modules/gulp/bin/gulp.js build

EXPOSE 3000

CMD npm start

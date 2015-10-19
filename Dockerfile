FROM node:latest

WORKDIR /opt

RUN git clone https://github.com/crudh/dashboard.git

WORKDIR /opt/dashboard

RUN npm install

RUN ./node_modules/gulp/bin/gulp.js build

EXPOSE 3000

CMD npm start

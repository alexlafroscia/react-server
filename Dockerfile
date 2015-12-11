FROM node:4
MAINTAINER Alex LaFroscia <alex@lafroscia.com>

EXPOSE 3000
COPY package.json /tmp/package.json
RUN cd /tmp/ && \
    npm install --production
RUN mkdir -p /opt/app && \
    cp -a /tmp/node_modules /opt/app

WORKDIR /opt/app
COPY . /opt/app

RUN npm run build

CMD ["npm", "start"]

#u21669849, Qwinton Knocklein

FROM node:20

WORKDIR /app

COPY . .

RUN npm install

RUN npx --config webpack.config.js

ENV PORT=3000

CMD [ "npm","start" ]

EXPOSE 3000
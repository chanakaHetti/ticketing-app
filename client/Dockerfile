FROM node:14.15.3

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD npm run dev

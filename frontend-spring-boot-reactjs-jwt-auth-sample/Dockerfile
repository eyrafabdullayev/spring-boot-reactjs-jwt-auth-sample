FROM node:10-alpine as build-step
RUN mkdir /frontend
WORKDIR /frontend
COPY package.json /frontend
RUN npm install
COPY . /frontend
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build-step /frontend/build /usr/share/nginx/html
EXPOSE 3000

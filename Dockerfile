# 1 build
FROM node:12.16.1-stretch as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . ./

RUN npm run lint || true
RUN npm run build
RUN npm run check

# 2 copy to nginx
FROM nginx:1.17.9-alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -r /usr/share/nginx/html/*
COPY --chown=101:101 --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

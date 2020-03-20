# 1 build
FROM node:12.16.1-stretch as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . ./

RUN npm run lint
RUN npm run build

# 2 copy to nginx
FROM nginx:1.17.9-alpine

COPY --chown=101:101 --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

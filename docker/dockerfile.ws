FROM oven/bun:1 AS base
WORKDIR /apps/http
COPY ./package.json ./package.json
COPY  ./package-lock.json ./package-lock.json

RUN bun install
COPY . .
EXPOSE 8000
CMD ["bun","index.js"]


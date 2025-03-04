FROM oven/bun:1
WORKDIR /apps/ws
# COPY ./package.json ./package.json
# COPY  ./package-lock.json ./package-lock.json 
#  why not above package json see because it's turbo repo project it have multiple package json fiel so which 
# we have to copy 

COPY ./packages ./packages
COPY ./bun.lock ./bun.lock

COPY ./package.json ./package.json
COPY ./turbo.json ./turbo.json

COPY ./apps/ws ./apps/ws



RUN bun install

RUN bun run db:migrate

EXPOSE 8000

CMD ["bun","run","start:ws"]


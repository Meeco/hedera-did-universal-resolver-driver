# -- build for production

FROM node:17-alpine as builder

ENV NODE_ENV build

WORKDIR /home/node

COPY . /home/node

RUN npm ci \
    && npm prune --production

# --- production

FROM node:17-alpine as production

ENV NODE_ENV production

WORKDIR /home/node

COPY --from=builder /home/node/package*.json /home/node/
COPY --from=builder /home/node/node_modules/ /home/node/node_modules/
COPY --from=builder /home/node/src/ /home/node/src/

EXPOSE 8081

CMD ["npm", "run", "start"]

FROM node:17.5.0
LABEL repository="git@github.com:Meeco/hedera-did-driver.git"

USER root

# add source files
RUN mkdir "hedera-did-driver"
ADD LICENSE package.json yarn.lock README.md hedera-did-driver/
ADD src/ hedera-did-driver/src/
RUN cd hedera-did-driver && yarn install --prod --frozen-lockfile

EXPOSE 8081

ENTRYPOINT ["node", "/hedera-did-driver/src/server.js"]

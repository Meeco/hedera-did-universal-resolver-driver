const { Client } = require("@hashgraph/sdk");
const { HcsDid, HederaDidResolver } = require("@hashgraph/did-sdk-js");
const { Resolver } = require("did-resolver");

//this project ID is only useful for ethr-did resolution
const client = Client.forTestnet();

const express = require("express");
const app = express();

const resolver = new Resolver({
  ...new HederaDidResolver(client).build(),
});

app.get("/1.0/identifiers/*", async function (req, res) {
  const url = req.url;
  const regex = /\/1.0\/identifiers\/(did:.*)/;
  const did = regex.exec(url)[1];

  console.log("Resolving DID: " + did);

  resolver
    .resolve(did)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      if (
        err.message.match(
          /(Unsupported DID method:)|(Invalid DID)|(Not a valid ethr DID:)/
        )
      ) {
        res.status(400).send(err.message);
      } else {
        console.error(err);
        res.status(500).send(err.message);
      }
    });
});

module.exports = app;

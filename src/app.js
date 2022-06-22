const { HederaDidResolver } = require("@hashgraph/did-sdk-js");
const { Resolver } = require("did-resolver");
const cors = require("cors");

const express = require("express");
const app = express();

const resolver = new Resolver({
  ...new HederaDidResolver().build(),
});

app.use(cors());

app.get("/1.0/identifiers/*", async function (req, res) {
  const url = req.url;
  const regex = /\/1.0\/identifiers\/(did:.*)/;
  const matches = regex.exec(url);
  const did = matches ? matches[1] : null;

  console.log("Resolving DID: " + did);

  resolver
    .resolve(did)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      if (err.message.match(/(DID string is invalid)/)) {
        res.status(400).send(err.message);
      } else {
        console.error(err);
        res.status(500).send(err.message);
      }
    });
});

module.exports = app;

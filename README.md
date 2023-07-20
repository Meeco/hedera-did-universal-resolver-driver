# hedera-did-driver

Driver for the hedera DID methods to be used in the [Universal Resolver](https://github.com/decentralized-identity/universal-resolver). The Docker image is hosted on Docker Hub here:

<https://hub.docker.com/r/meeco/uni-resolver-driver-did-hedera/>

The file `src/server.js` is an small Express Node app acting as a thin wrapper around the [Javascript DID resolver](https://github.com/decentralized-identity/did-resolver). It listens to port 8081.

The following DID methods are supported:

- [hedera](https://github.com/hashgraph/did-method/blob/master/did-method-specification.md)

## Curl Tests

Run service with

```
npm start
```

then run queries

```
curl -X GET http://localhost:8081/1.0/identifiers/did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424549
```

## Example DID

- `did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424549`

# hedera-did-driver

Driver for the hedera DID methods to be used in the [Universal Resolver](https://github.com/decentralized-identity/universal-resolver). The Docker image is hosted on Docker Hub here:

<https://hub.docker.com/r/meeco/uni-resolver-driver-did-hedera/>

The file `src/server.js` is an small Express Node app acting as a thin wrapper around the [Javascript DID resolver](https://github.com/decentralized-identity/did-resolver). It listens to port 8081.

The following DID methods are supported:

* [hedera](https://github.com/hashgraph/did-method/blob/master/did-method-specification.md)

## Curl Tests

Run service with 
```
npm start
```

then run queries

```
curl -X GET http://localhost:8081/1.0/identifiers/did:hedera:testnet:z6MkvD6JAfMyP6pgQoYxfE9rubgwLD9Hmz8rQh1FAxvbW8XB_0.0.29656526
```

## Example DIDs

* `did:hedera:testnet:z6MkvD6JAfMyP6pgQoYxfE9rubgwLD9Hmz8rQh1FAxvbW8XB_0.0.29656526`
* `did:hedera:testnet:z6MkgUv5CvjRP6AsvEYqSRN7djB6p4zK9bcMQ93g5yK6Td7N_0.0.29613327`


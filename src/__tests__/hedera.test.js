var app = require("../app");
var request = require("supertest");

describe("did:hedera driver", () => {
  it("responds with didResolutionResult", async () => {
    expect.assertions(4);
    const did =
      "did:hedera:testnet:z6MkvD6JAfMyP6pgQoYxfE9rubgwLD9Hmz8rQh1FAxvbW8XB_0.0.29656526";
    const response = await request(app).get(`/1.0/identifiers/${did}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("didDocument");
    expect(response.body).toHaveProperty("didDocumentMetadata");
    expect(response.body.didResolutionMetadata).toEqual({
      contentType: "application/did+ld+json",
    });
  });

  describe("responds with known did doc for ", () => {
    it("did:hedera:testnet:z6MkvD6JAfMyP6pgQoYxfE9rubgwLD9Hmz8rQh1FAxvbW8XB_0.0.29656526", async () => {
      expect.assertions(2);
      const did =
        "did:hedera:testnet:z6MkvD6JAfMyP6pgQoYxfE9rubgwLD9Hmz8rQh1FAxvbW8XB_0.0.29656526";
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        didDocumentMetadata: {},
        didResolutionMetadata: {
          contentType: "application/did+ld+json",
        },
        didDocument: {
          "@context": "https://www.w3.org/ns/did/v1",
          authentication: [
            "did:hedera:testnet:z6MkvD6JAfMyP6pgQoYxfE9rubgwLD9Hmz8rQh1FAxvbW8XB_0.0.29656526#did-root-key",
          ],
          assertionMethod: [
            "did:hedera:testnet:z6MkvD6JAfMyP6pgQoYxfE9rubgwLD9Hmz8rQh1FAxvbW8XB_0.0.29656526#did-root-key",
          ],
          id: "did:hedera:testnet:z6MkvD6JAfMyP6pgQoYxfE9rubgwLD9Hmz8rQh1FAxvbW8XB_0.0.29656526",
          verificationMethod: [
            {
              id: "did:hedera:testnet:z6MkvD6JAfMyP6pgQoYxfE9rubgwLD9Hmz8rQh1FAxvbW8XB_0.0.29656526#did-root-key",
              controller:
                "did:hedera:testnet:z6MkvD6JAfMyP6pgQoYxfE9rubgwLD9Hmz8rQh1FAxvbW8XB_0.0.29656526",
              publicKeyMultibase:
                "z6MkvD6JAfMyP6pgQoYxfE9rubgwLD9Hmz8rQh1FAxvbW8XB",
              type: "Ed25519VerificationKey2018",
            },
          ],
        },
      });
    });

    it("did:hedera:testnet:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA_0.0.29677421", async () => {
      expect.assertions(2);
      const did =
        "did:hedera:testnet:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA_0.0.29677421";
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        didDocument: {
          "@context": "https://www.w3.org/ns/did/v1",
          id: "did:hedera:testnet:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA_0.0.29677421",
          verificationMethod: [
            {
              controller:
                "did:hedera:testnet:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA_0.0.29677421",
              id: "did:hedera:testnet:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA_0.0.29677421#did-root-key",
              publicKeyMultibase:
                "z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA",
              type: "Ed25519VerificationKey2018",
            },
          ],
          assertionMethod: [
            "did:hedera:testnet:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA_0.0.29677421#did-root-key",
          ],
          authentication: [
            "did:hedera:testnet:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA_0.0.29677421#did-root-key",
          ],
          service: [
            {
              id: "did:hedera:testnet:z6MkubW6fwkWSA97RbKs17MtLgWGHBtShQygUc5SeHueFCaG_0.0.29656231#service-1",
              serviceEndpoint: "https://test.com/did",
              type: "LinkedDomains",
            },
          ],
        },
        didResolutionMetadata: {
          contentType: "application/did+ld+json",
        },
        // TODO: is this correct? maybe not.
        didDocumentMetadata: {},
      });
    });

    it("did:hedera:testnet:z6Mkfr5oa1vS1zqVXNFsxYA7W2zyQtBi3D15w7czzpCUCjo9_0.0.29677440", async () => {
      expect.assertions(2);
      const did =
        "did:hedera:testnet:z6Mkfr5oa1vS1zqVXNFsxYA7W2zyQtBi3D15w7czzpCUCjo9_0.0.29677440";
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        didDocument: {
          "@context": "https://www.w3.org/ns/did/v1",
          id: "did:hedera:testnet:z6Mkfr5oa1vS1zqVXNFsxYA7W2zyQtBi3D15w7czzpCUCjo9_0.0.29677440",
          verificationMethod: [
            {
              controller:
                "did:hedera:testnet:z6Mkfr5oa1vS1zqVXNFsxYA7W2zyQtBi3D15w7czzpCUCjo9_0.0.29677440",
              id: "did:hedera:testnet:z6Mkfr5oa1vS1zqVXNFsxYA7W2zyQtBi3D15w7czzpCUCjo9_0.0.29677440#did-root-key",
              publicKeyMultibase:
                "z6Mkfr5oa1vS1zqVXNFsxYA7W2zyQtBi3D15w7czzpCUCjo9",
              type: "Ed25519VerificationKey2018",
            },
            {
              controller:
                "did:hedera:testnet:z6Mkfr5oa1vS1zqVXNFsxYA7W2zyQtBi3D15w7czzpCUCjo9_0.0.29677440",
              id: "did:hedera:testnet:z6Mkkcn1EDXc5vzpmvnQeCKpEswyrnQG7qq59k92gFRm1EGk_0.0.29617801#key-1",
              publicKeyMultibase:
                "z6MkhHbhBBLdKGiGnHPvrrH9GL7rgw6egpZiLgvQ9n7pHt1P",
              type: "Ed25519VerificationKey2018",
            },
          ],
          assertionMethod: [
            "did:hedera:testnet:z6Mkfr5oa1vS1zqVXNFsxYA7W2zyQtBi3D15w7czzpCUCjo9_0.0.29677440#did-root-key",
          ],
          authentication: [
            "did:hedera:testnet:z6Mkfr5oa1vS1zqVXNFsxYA7W2zyQtBi3D15w7czzpCUCjo9_0.0.29677440#did-root-key",
          ],
        },
        didResolutionMetadata: {
          contentType: "application/did+ld+json",
          error: undefined,
        },
        didDocumentMetadata: {},
      });
    });
  });

  describe("responds with didResolutionResult for", () => {
    it("did:hedera:testnet:z6Mkfr5oa1vS1zqVXNFsxYA7W2zyQtBi3D15w7czzpCUCjo9_0.0.29677440", async () => {
      expect.assertions(1);
      const did =
        "did:hedera:testnet:z6Mkfr5oa1vS1zqVXNFsxYA7W2zyQtBi3D15w7czzpCUCjo9_0.0.29677440";
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.body.didDocument).toHaveProperty("verificationMethod");
    });

    it("did:hedera:testnet:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA_0.0.29677421", async () => {
      expect.assertions(1);
      const did =
        "did:hedera:testnet:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA_0.0.29677421";
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.body.didDocument).toHaveProperty("service");
    });
  });

  describe("responds with error for", () => {
    it("unknown hedera network", async () => {
      expect.assertions(2);
      const did =
        "did:hedera:unknown:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA_0.0.29677421";
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.status).toBe(200);
      expect(response.body.didResolutionMetadata).toEqual({
        error: "invalidDid",
        message: expect.stringContaining(
          `Error: DID string is invalid. Invalid Hedera network.`
        ),
      });
    });

    it("missing topic id from did", async () => {
      expect.assertions(2);
      const did =
        "did:hedera:unknown:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA";
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.status).toBe(200);
      expect(response.body.didResolutionMetadata).toEqual({
        error: "invalidDid",
        message: expect.stringContaining(
          "Error: DID string is invalid: topic ID is missing"
        ),
      });
    });

    it("bad address generic DID", async () => {
      expect.assertions(2);
      const did =
        "did:unknown:testnet:z6MkoDQtZUaT4vD314TcG5u91G46PoANQ8juFvuR2MnrfCqA_0.0.29677421";
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.status).toBe(200);
      expect(response.body.didResolutionMetadata).toEqual({
        error: "unsupportedDidMethod",
      });
    });
  });
});

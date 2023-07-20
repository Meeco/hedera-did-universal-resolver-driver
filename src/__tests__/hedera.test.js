var app = require('../app');
var request = require('supertest');

describe('did:hedera driver', () => {
  it('responds with didResolutionResult', async () => {
    expect.assertions(4);
    const did = 'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424548';
    const response = await request(app).get(`/1.0/identifiers/${did}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('didDocument');
    expect(response.body).toHaveProperty('didDocumentMetadata');
    expect(response.body.didResolutionMetadata).toEqual({
      contentType: 'application/did+ld+json',
    });
  });

  describe('responds with known did doc for ', () => {
    it('did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424548', async () => {
      expect.assertions(2);
      const did = 'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424548';
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        didDocumentMetadata: {
          versionId: '1689616532620',
          created: '2023-07-17T17:55:26.160Z',
          updated: '2023-07-17T17:55:32.620Z',
        },
        didResolutionMetadata: { contentType: 'application/did+ld+json' },
        didDocument: {
          '@context': 'https://www.w3.org/ns/did/v1',
          id: 'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424548',
          verificationMethod: [
            {
              id: 'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424548#did-root-key',
              type: 'Ed25519VerificationKey2018',
              controller:
                'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424548',
              publicKeyBase58: '5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr',
            },
            {
              id: 'did:hedera:testnet:z87meAWt7t2zrDxo7qw3PVTjexKWReYWS75LH29THy8kb_0.0.29617801#key-1',
              type: 'Ed25519VerificationKey2018',
              controller:
                'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424548',
              publicKeyBase58: '87meAWt7t2zrDxo7qw3PVTjexKWReYWS75LH29THy8kb',
            },
          ],
          assertionMethod: [
            'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424548#did-root-key',
          ],
          authentication: [
            'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424548#did-root-key',
          ],
        },
      });
    });

    it('did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424550', async () => {
      expect.assertions(2);
      const did = 'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424550';
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        didDocumentMetadata: {
          versionId: '1689616569907',
          created: '2023-07-17T17:56:02.435Z',
          updated: '2023-07-17T17:56:09.907Z',
        },
        didResolutionMetadata: { contentType: 'application/did+ld+json' },
        didDocument: {
          '@context': 'https://www.w3.org/ns/did/v1',
          id: 'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424550',
          verificationMethod: [
            {
              id: 'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424550#did-root-key',
              type: 'Ed25519VerificationKey2018',
              controller:
                'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424550',
              publicKeyBase58: '5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr',
            },
          ],
          assertionMethod: [
            'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424550#did-root-key',
          ],
          authentication: [
            'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424550#did-root-key',
          ],
        },
      });
    });
  });

  describe('responds with didResolutionResult for', () => {
    it(' did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424549', async () => {
      expect.assertions(1);
      const did = 'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424549';
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.body.didDocument).toHaveProperty('verificationMethod');
    });
  });

  describe('responds with error for', () => {
    //TODO: fix this test
    it('unknown hedera network', async () => {
      const did = 'did:hedera:unknown:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424548';
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.status).toBe(500);
      // expect(response.body.didResolutionMetadata).toEqual({
      //   error: 'unsupportedNetwork',
      // });
    });

    it('missing topic id from did', async () => {
      const did = 'did:hedera:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr';
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.status).toBe(200);
      expect(response.body.didResolutionMetadata).toEqual({
        error: 'invalidDid',
        message: expect.stringContaining('Error: DID string is invalid: topic ID is missing'),
      });
    });

    it('bad address generic DID', async () => {
      const did = 'did:unknown:testnet:z5P1atRTktJL8Ap7saabU4pHEaT96ZBFHQU5qeYjxYLqr_0.0.15424548';
      const response = await request(app).get(`/1.0/identifiers/${did}`);
      expect(response.status).toBe(200);
      expect(response.body.didResolutionMetadata).toEqual({
        error: 'unsupportedDidMethod',
      });
    });
  });
});

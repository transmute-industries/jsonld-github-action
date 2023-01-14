const adapter = require('../src/adapter');

describe("frame", () => {
  it("works without documentLoader", async () => {
    const response = await adapter.operationSwitch({
      operation: 'frame',
      document: `
      {
        "http://schema.org/name": "Orie Steele",
        "http://schema.org/url": {"@id": "https://transmute.industries"}
      }
      `
    });
    expect(response['@graph']).toBeDefined()
  });
});

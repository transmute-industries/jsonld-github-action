const adapter = require('../src/adapter');

jest.setTimeout(10 * 1000);

describe("adapter", () => {
  it("doWork", async () => {
    const response = await adapter.doWork({
      args:[123]
    });
    // console.log(JSON.stringify(response, null, 2))
    expect(response.work).toBe('complete');
  });
});

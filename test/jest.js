// @flow

describe('test', () => {
  it('works in timeout', async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 40000;

    await new Promise(resolve => setTimeout(resolve, 30000));
  });
});

// @flow

export default async function testFunction(a: number): Promise<{ test: string }> {
  const response = await window.fetch(`http://test.lol/api/${a}`);

  if (!response.ok) {
    throw new Error('Test');
  }

  const body = await response.json();

  if (typeof body.test === 'string') {
    return body;
  }

  throw new Error('Bla bla');
}

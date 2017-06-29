// @flow

import { Transform } from 'stream';
import { spawn } from 'child_process';

export default async function testFunction(): Promise<{ ok: boolean }> {
  // eslint-disable-next-line no-unused-vars
  const testStream: stream$Transform = new Transform();

  const result: number = await new Promise((resolve, reject) => {
    const child = spawn('node', ['-v'], { cwd: process.cwd(), env: process.env });

    child.on('error', e => reject(e));

    child.on('exit', code => resolve(code));
  });

  return {
    ok: result === 0,
  };
}

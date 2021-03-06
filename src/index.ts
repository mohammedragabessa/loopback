import { LoopbackApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { LoopbackApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new LoopbackApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at with docker ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

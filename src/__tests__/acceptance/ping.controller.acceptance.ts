import {Client, expect} from '@loopback/testlab';
import {Lb4JestApplication} from '../..';
import {setupApplication} from './test-helper';

describe('PingController', () => {
  let app: Lb4JestApplication;
  let client: Client;

  beforeAll(async () => {
    ({app, client} = await setupApplication());
  });

  afterAll(async () => {
    await app.stop();
  });

  test('invokes GET /ping', async () => {
    const res = await client.get('/ping?msg=world').expect(200);
    expect(res.body).to.containEql({greeting: 'Hello from LoopBack'});
  });
});

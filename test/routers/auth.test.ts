
import "module-alias/register";
import App from '@/app';
import request from 'supertest';

const app = App.buildExpressApp();

beforeAll(async () => {
  // await App.connectForWork();
});

describe('auth', () => {
  test('must be pass', (done) => {
    request(app)
      .post('/')
      // .send({/* about post data */})
      .expect(200, done);
  });
});
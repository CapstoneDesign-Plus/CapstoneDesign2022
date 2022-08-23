import "module-alias/register";
import App from '@/app';
import request from 'supertest';
import env from "@/config";

const app = App.buildExpressApp();

beforeAll(async () => {
  await App.connectForWork();
});

describe('User API', () => {
  /**
   * User Auth
   */
  test('Auth User', (done) => {
    request(app)
      .post('/api/v1/user/login')
      .send({
        email: env.TEST_ACCOUNT_EMAIL,
        password: env.TEST_ACCOUNT_PASSWORD
      })
      .expect(200, done);
  });

  /**
   * User Get
   */
  test('Get User', (done) => {
    request(app)
      .get(`/api/v1/user/get/${env.TEST_ACCOUNT_EMAIL}`)
      .send()
      .expect(200, done);
  });
});
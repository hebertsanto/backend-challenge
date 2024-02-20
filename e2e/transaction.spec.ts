import { AppRoutes } from '../src/http/express';
import request from 'supertest';

describe('teste', () => {
  //eslint-disable-next-line
  let app: any;

  beforeAll(async () => {
    await AppRoutes.initialize();
    app = AppRoutes.getInstance();
  });

  it('must return transactions from a card', async () => {
    const card_id = '36ffb3e9-e7ac-4323-8395-606c17205339';
    const response = await request(app)
      .get(`/transaction/all/${card_id}`);

    expect(response.status).toBe(200);
    expect(response.body.msg).toEqual('all transations are available');
  });
});

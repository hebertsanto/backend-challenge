import { AppRoutes } from '../src/http/express';
import request from 'supertest';

//eslint-disable-next-line
let app: any;

beforeAll(async () => {
  await AppRoutes.initialize();
  app = AppRoutes.getInstance();
});

describe('should return all transactions from card', () => {

  it('/GET /transaction/all/card_id', async () => {
    const card_id = '36ffb3e9-e7ac-4323-8395-606c17205339';
    const response = await request(app)
      .get(`/transaction/all/${card_id}`);

    expect(response.status).toBe(200);
    expect(response.body.msg).toEqual('all transations are available');
  });

});

describe('should return NotFoundResourse if card_id does not exist', () => {
  it('/GET /transaction/all/non_exist_card', async() => {
    const response = await request(app)
      .get('/transaction/all/non_existent_card');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'NotFoundResource');
  } );

});

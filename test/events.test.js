import server from '../src/server/server';
import mockData from '../src/server/events/mock-data';
import supertest from 'supertest';

const request = supertest(server);

it('respond with events', async () => {
  const { body } = await request.get('/events');
  expect(body).toEqual(mockData);
});

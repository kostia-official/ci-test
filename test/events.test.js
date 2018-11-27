import index from '../src/server/index';
import mockData from '../src/server/events/mock-data';
import supertest from 'supertest';

const request = supertest(index);

it('respond with events', async () => {
  const { body } = await request.get('/events');
  expect(body).toEqual(mockData);
});

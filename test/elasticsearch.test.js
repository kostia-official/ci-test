import es from '../src/server/elasticsearch';

const index = 'some';
const type = '_doc';
const body = {
  title: 'Test 1',
  tags: ['y', 'z'],
  published: true
};

it('respond with created document', async () => {
  const { _id: id } = await es.index({ index, body, type });
  const result = await es.get({ index, type, id });

  expect(result._id).toEqual(id);
  expect(result._source).toEqual(body);
});

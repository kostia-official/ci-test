import { Client } from 'elasticsearch';
import debug from 'debug';

const client = new Client({
  host: process.env.ELASTICSEARCH_HOST,
});

client.ping({
  requestTimeout: 10000,
}, (error) => {
  if (error) debug('elasticsearch error:', error.toJSON());
});

export default client;

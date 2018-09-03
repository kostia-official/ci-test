import express from 'express';
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import events from './events';

const server = express();

server
  .disable('x-powered-by')
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(helmet())
  .use(cors())
  .use(compress())
  .get('/events', events);

export default server;

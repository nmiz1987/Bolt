#!/usr/bin/env node

const path = require('path');

const { createRequestHandler: createRequestHandlerExpress } = require('@expo/server/adapter/express');

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

const CLIENT_BUILD_DIR = path.join(process.cwd(), 'dist/client');
const SERVER_BUILD_DIR = path.join(process.cwd(), 'dist/server');

function delay(ms = 2000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const app = express();
app.use(cors());
app.use(compression());

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by');

process.env.NODE_ENV = 'production';

app.use(
  express.static(CLIENT_BUILD_DIR, {
    maxAge: '1h',
    extensions: ['html'],
  }),
);

app.use(morgan('tiny'));

app.get('/200', async (req, res) => {
  await delay();
  return res.status(200).json({ message: 'This is demo for response with status code 200' });
});

app.get('/400', async (req, res) => {
  await delay();
  return res.status(400).json({ message: 'This is demo for error with status code 400' });
});

app.get('/500', async (req, res) => {
  await delay();
  return res.status(500).json({ message: 'This is demo for error with status code 500' });
});

app.all(
  '*',
  createRequestHandlerExpress({
    build: SERVER_BUILD_DIR,
  }),
);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

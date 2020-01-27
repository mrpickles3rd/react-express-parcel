const path = require('path');

const favicon = require('serve-favicon');
const express = require('express');

const app = express();

app.use(favicon(path.join(__dirname, '../favicon/favicon.png')))

app.get('/data', (unused, res) => {
  return res.json({ a: '???????' });
});

if (process.env.NODE_ENV === 'development') {
  console.info('Loading Dev server');
  const path = require('path');
  const Bundler = require('parcel-bundler');
  const bundler = new Bundler(path.resolve(__dirname, '../src/index.html'));

  app.use(bundler.middleware());
} else if (process.env.NODE_ENV === 'production') {
  console.info('Loading PROD server');
  app.use('/', express.static(path.join(__dirname, '../dist')));
}

app.listen(3000);

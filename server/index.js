const express = require('express');

const app = express();

app.get('/data', (unused, res) => {
  return res.json({ a: '???????' });
});

if (process.env.NODE_ENV === 'development') {
  const path = require('path');
  const Bundler = require('parcel-bundler');
  const bundler = new Bundler(path.resolve(__dirname, '../src/index.html'));

  app.use(bundler.middleware());
}

app.listen(3000);

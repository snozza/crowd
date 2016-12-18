const Express = require('express');
const path = require('path');

const app = new Express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(`/static`, Express.static(path.join(__dirname, '../client/build/static')));

module.exports = app;

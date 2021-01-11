const express = require('express');
const path = require('path');

const app = express();

app.use('/assets', express.static('assets'));

app.use('*', (request, response) => {
  console.log(path.join(__dirname, 'build/index.html'));
  return response.sendFile(path.join(__dirname, 'build/index.html'));
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log('run server');
});

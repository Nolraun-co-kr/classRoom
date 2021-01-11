const express = require('express');

const app = express();

app.use('/assets', express.static('assets'));

const PORT = 8080;
app.listen(PORT, () => {
  console.log('run server');
});

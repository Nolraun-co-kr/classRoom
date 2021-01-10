const express = require('express');

const app = express();

app.use('/assets', express.static('assets'));

const PORT = 5000;
app.listen(PORT, () => {
  console.log('run server');
});

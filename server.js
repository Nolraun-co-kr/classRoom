const express = require('express');
const path = require('path');

const app = express();

app.use('/assets', express.static('assets'));

const root = path.join(__dirname, './build');
app.use(express.static(root));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log('run server');
});

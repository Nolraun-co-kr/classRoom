const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const parser = require('node-webvtt');

const app = express();

app.use(cors());
app.use('/assets', express.static('assets'));

app.get('/track', (req, res) => {
  const srt = fs.readFileSync(path.join(__dirname, '/assets/track/example.vtt'), 'utf8');
  const data = parser.parse(srt);
  return res.json(data);
});

const root = path.join(__dirname, './build');
app.use(express.static(root));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log('run server');
});

const express = require('express');
const { getUsers } = require('./db');

const app = express();

app.get('/users', (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.status(500).send('Error fetching users');
      return;
    }
    res.json(results);
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 8383;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

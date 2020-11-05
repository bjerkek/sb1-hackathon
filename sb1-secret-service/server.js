const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello from SpareBank 1 Hackathon from ' + process.env.HACKATHON_SECRET);
});

app.listen(8080, () => {
  console.log(`Server listening on port 8080...`);
});
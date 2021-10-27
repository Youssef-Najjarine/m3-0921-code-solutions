const express = require('express');
const path = require('path');
const app = express();

const publicVar = path.join(__dirname, '/public');
app.use(express.static(publicVar));

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

// http -v get localhost:3000/main.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const hostname = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hospital Menu API');
});

app.listen(port, hostname, () => {
  console.log(`App listening at http://${hostname}${port}`);
});

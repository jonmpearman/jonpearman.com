const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react/dist`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react/dist/template.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
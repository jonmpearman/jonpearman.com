const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react/dist`));

const requestLogger = function(req, res, next) {
  console.log(`Requesting ..... ${req.hostname}${req.originalUrl}`);
  next();
};

app.use(requestLogger);

app.get('/', [(req, res, next) => {
  res.sendFile(path.resolve(`${__dirname}/../react/dist/template.html`), [], (err) => {
    // throw error if file isn't found
    if (err) next(err);
    res.status(200);
    console.log(`Request worked .... serving file ${path.resolve(`${__dirname}/../react/dist/template.html`)}`);
  });
}]);

app.get('*', (req, res, next) => {
  res.status(404);

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Page Not Found.' });
    return;
  }

  // default to plain-text
  res.type('txt').send('Page Not Found.');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
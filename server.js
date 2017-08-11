const express = require('express');
const app = express();

app.use(require('./controllers'));

const port = process.env.PORT || 3000;

app.listen(port);
console.log('Express is running on: ' + port);

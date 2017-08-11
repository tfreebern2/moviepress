const express = require('express');
const app = express();
const es6Renderer = require('express-es6-template-engine');

if (process.env.NODE_ENV !== 'production') {
  require('./env.js');
}

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(express.static('./assets'));

app.use(require('./controllers'));

const port = process.env.PORT || 3000;

app.listen(port);
console.log('Express is running on: ' + port);

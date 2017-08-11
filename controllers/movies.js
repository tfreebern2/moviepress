const express = require('express');
const router = express.Router();

router
.get('/', (req, res) => {
  res.render('application', {
    locals: {
      yield: 'Hello World!'
    }
  });
});

module.exports = router;

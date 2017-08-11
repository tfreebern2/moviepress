const express = require('express');
const router = express.Router();

router
.get('/', (req, res) => {
  res.render('application', {
    partials: {
      yield: 'views/movies/index.html'
    }
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();

router
.get('/sign-up', (req, res) => {
  res.render('application', {
    partials: {
      yield: 'views/users/sign-up.html'
    }
  });
});

module.exports = router;

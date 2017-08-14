const express = require('express');
const router = express.Router();
const models = require('../models');

router
.get('/sign-up', (req, res) => {
  res.render('application', {
    partials: {
      yield: 'views/users/sign-up.html'
    }
  });
})
.post('/sign-up', (req, res) => {
  models.User.create(req.body, { fields: ['username', 'email', 'password'] })
  .then((user) => {
    res.send(JSON.stringify(req.body));
  }).catch((error) => {
    res.status(500);
  });
});

module.exports = router;

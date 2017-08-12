const express = require('express');
const router = express.Router();

router
.get('/sign-up', (req, res) => {
  res.render('application', {
    partials: {
      yield: 'views/users/sign-up.html'
    }
  });
})
.post('/sign-up', (req, res) => {
  console.log('SIGN UP POST REQUEST:');
  res.send(JSON.stringify(req.body));
});

module.exports = router;

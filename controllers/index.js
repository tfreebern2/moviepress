const express = require('express');
const router = express.Router();

router
.use(require('./movies.js'));

module.exports = router;

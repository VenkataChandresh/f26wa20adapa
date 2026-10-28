var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function(req, res, next) {
  let x = Math.floor(Math.random() * 100) + 1;

  if (req.query.x !== undefined) {
    x = Number(req.query.x);
  }

  if (!Number.isFinite(x) || x < 0) {
    return res.status(400).send('Please provide a valid non-negative number.');
  }

  let y = Math.log2(x);

  res.send(`Math.log2 applied to ${x} is ${y}`);
});

module.exports = router;
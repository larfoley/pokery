var express = require('express');
var router = express.Router();

router.use('/', (req, res) => {
  res.json({sdf: 2323})
});

module.exports = router;

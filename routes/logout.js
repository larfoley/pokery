var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  req.logout();
  res.json({message: "logged out"});
});

module.exports = router

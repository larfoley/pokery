var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/', passport.authenticate('local'), (req, res, next) => {
  res.redirect('/')
});
 
router.get('/', (req, res) => {
  if (req.user) {
    res.redirect('/')
  } else {
    res.render('login')
  }
})

module.exports = router;

var router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')
const requiresAuth = require('../middleware/requiresAuth.js')

router.post('/', requiresAuth, (req, res, next) => {

  const password = req.body.password
  const username = req.user.username

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return next(err)

    User.findOneAndUpdate({ username }, { hash }, (err, doc) => {
      if (err) next(err)
      res.json({message: "password updated"})
    })

  });

})

module.exports = router

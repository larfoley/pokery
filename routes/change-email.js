var router = require("express").Router();
const User = require('../models/User');
const requiresAuth = require('../middleware/requiresAuth.js')

router.post('/', requiresAuth, (req, res, next) => {
  const email = req.body.email
  const username = req.user.username

  User.findOneAndUpdate({ username }, { email }, (err, doc) => {
    if (err) next(err)
    res.json({message: "email updated"})
  })

})

module.exports = router

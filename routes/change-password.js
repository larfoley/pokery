var router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')
const requiresAuth = require('../middleware/requiresAuth.js')

router.post('/', requiresAuth, (req, res) => {
  const _id = req.body._id;
  const password = req.body.password;

  User.findById(_id, (err, user) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return next(err)
      }
      User.findOneAndUpdate({_id}, {hash}, {}, (err, user) => {
        if(err) {
          throw err
        }
        res.json({user})
      });
    });
  });
})

module.exports = router

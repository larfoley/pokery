var express = require('express');
var router = express.Router();
var User = require('../models/User.js')
var bcrypt = require('bcrypt')

router.post('/', (req, res, next) => {

  var username = req.body.username;
  var password = req.body.password;

  // =============================
  //  Validate User input here


  // =============================


  // Check if user already exists
  User.findOne({username}).exec((err, user) => {
    if (user) {
      res.status = 400;
      res.json('index', {message: "user already exists"})
      return;
    }

    // Hash users password before saving to db
    bcrypt.hash(password, 10, (err, hash) => {
      var user = new User({
        username: username,
        hash: hash
      });

      // Add user to db
      user.save()
      return res.json({success: true})
    });

  })

});


module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/User.js')
const bcrypt = require('bcrypt')

router.post('/', (req, res, next) => {

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // =============================
  //  Validate User input here

  // =============================


  // Check if user already exists
  User.findOne({username}).exec((err, user) => {
    if (user) {
      res.status = 400;
      res.json({message: "user already exists"})
      return;
    }

    // Hash users password before saving to db
    bcrypt.hash(password, 10, (err, hash) => {
      const user = new User({
        username: username,
        hash: hash,
        email: email
      });

      // Add user to db
      user.save()
      return res.json({success: true, user: user})
    });

  })

});


module.exports = router;

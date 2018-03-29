var router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
  const _id = req.body._id;
  const email = req.body.email;
  User.findById(_id, (err, user) => {
      User.findOneAndUpdate({_id}, {email}, {}, (err, user) => {
        if(err) {
          throw err
        }
        res.json({user})
      });
  });
})

module.exports = router

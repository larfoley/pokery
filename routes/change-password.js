var router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
  console.log(req.body)
  User.findById(req.body.id, (err, user) => {
    console.log(user)

    bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
      if (err) return next(err)
      user.hash= hash
      // console.log("hash: " + hash)
      User.findOneAndUpdate({_id: req.body.id}, {hash: hash}, {}, (err, user) => {
        if(err){
          throw err;
        }
        console.log("\nnew user" + user)
      });
    });

    res.json({"1":1})
    
  });
})

router.get('/', (req, res) => {
  User.find((err, lists) => {
		if(err){
      console.log(err)
			throw err;
		}
		res.json(lists);
  });
})

module.exports = router

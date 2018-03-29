var router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
  const _id = req.body.id;
  const password = req.body.newPassword;
  
  User.findById(_id, (err, user) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return next(err)
      
      User.findOneAndUpdate({_id: _id}, {hash: hash}, {}, (err, user) => {
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

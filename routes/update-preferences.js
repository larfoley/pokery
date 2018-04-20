const express = require('express');
const router = express.Router();
const User = require('../models/User');
const requiresAuth = require('../middleware/requiresAuth.js')

router.post('/', requiresAuth, (req, res, next) => {
  const preferences = req.body

  User.findById(req.user._id, (err, user) => {
      if (err) return next(err);
      user.preferences = preferences
      user.save((err, doc) => {
        if (err) return next(err)
        res.json(doc)
      })
  })
  
});

router.get('/', (req, res, next) => {
  User.findById("5aca56f485e30138da7286c7", (err, user) => {
      res.json(user.preferences)
  })
})

module.exports = router;

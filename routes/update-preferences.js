const express = require('express');
const router = express.Router();
const User = require('../models/User');
const requiresAuth = require('../middleware/requiresAuth.js')

router.post('/', requiresAuth, (req, res, next) => {
  const preferences = req.body

  User.findByIdAndUpdate(req.user._id, { preferences }, (err, doc) => {
      if (err) return next(err);
      res.json(doc)
  })

});

module.exports = router;

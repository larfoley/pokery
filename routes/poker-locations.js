const express = require('express');
const router = express.Router();
const User = require('../models/User');
const requiresAuth = require('../middleware/requiresAuth.js')

router.get("/test", requiresAuth, (req, res, next) => {
	User.findById(req.user._id, (err, user) => {
	  if (err) return next(err);
	  res.json(user.pokerLocations);
	})
})

// Get all poker locations
router.get('/', requiresAuth, (req, res, next) => {
	User.findById(req.user._id, (err, user) => {
	  if (err) return next(err);
	  res.json(user.pokerLocations);
	})
})

// Add a new poker location
router.post('/add', requiresAuth, (req, res, next) => {
	// TODO: Validate user Input
	User.findById(req.user._id, (err, user) => {
  	if (err) return next(err);
		// Check if location already exists
		if (user.pokerLocations.find(pokerLocation => pokerLocation.name === req.body.pokerLocation)) {
			return res.status(400).json({message: "location already exists"})
		};
		user.pokerLocations.push({name: req.body.pokerLocation})
		user.save(function (err, updatedTank) {
    if (err) return next(err);
    	res.json({message: "location added"});
  	});
	})
});

module.exports = router;

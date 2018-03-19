const express = require('express');
const router = express.Router();
const User = require('../models/User');
const requiresAuth = require('../middleware/requiresAuth.js')

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
		user.save(err => {
    if (err) return next(err);
    	res.json({message: "location added"});
  	});
	})
});

// Edit poker location
router.post('/edit', requiresAuth, (req, res, next) => {
	User.findById(req.user._id, (err, user) => {
		if (err) return next(err);

		var location = user.pokerLocations.find(location => location._id == req.body.id)
		if (location) {
			location.name = req.body.newName
			user.save((err, saved) => {
				if (err) return next(err);
				res.json(saved.pokerLocations);
			});
		} else {
			next(new Error("location not found"))
		}

	})
});

// Delete poker location
router.post('/delete', requiresAuth, (req, res, next) => {
	User.findById(req.user._id, (err, user) => {
		if (err) return next(err);
		user.pokerLocations.id(req.body.id).remove();
		user.pokerSessions = user.pokerSessions.filter(session => session.name != req.body.name)
		user.save((err, doc) => {
		  if (err) return next(err);
		  res.json(doc.pokerLocations)
		});
	})
});

module.exports = router;

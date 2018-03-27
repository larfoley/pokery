const express = require('express');
const router = express.Router();
const User = require('../models/User');
const requiresAuth = require('../middleware/requiresAuth.js')

// get all sessions
router.get('/', requiresAuth, (req, res, next) => {
	User.findById(req.user._id, (err, user) => {
	  if (err) return next(err);
	  res.json(user.pokerSessions);
	})
})

// get session by id
router.get('/:id', requiresAuth, (req, res, next) => {
	User.findById(req.user._id, (err, user) => {
	  if (err) return next(err);
		var pokerSession = user.pokerSessions.find(session => session.id === req.params.id)
		res.json(pokerSession)
	})
})

// Add a new poker session
router.post('/add', requiresAuth, (req, res, next) => {
	// TODO: Validate user Input
	User.findById(req.user._id, (err, user) => {
  	if (err) return next(err);
		// Check if session already exists
		if (user.pokerSessions.find(pokerSession => pokerSession._id === req.body.pokerSession)) {
			return res.status(400).json({message: "session already exists"})
		};
		user.pokerSessions.push(req.body.pokerSession)
		user.save((err, doc) => {
    if (err) return next(err);
    	res.json(doc.pokerSessions);
  	});
	})
});

module.exports = router;

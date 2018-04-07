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

// Edit poker pokerSession
router.post('/edit', requiresAuth, (req, res, next) => {
	const	newLocation = req.body.location
	const	newVariation = req.body.variation
	const	newGameType = req.body.gameType
	const	newNotes = req.body.notes
	const	newDate = req.body.date
	const	newBuyIn = parseInt(req.body.buyIn, 10)
	const	newAmountWon = parseInt(req.body.amountWon, 10)

	User.findById(req.user._id, (err, user) => {
		if (err) return next(err)

		const pokerSession = user
			.pokerSessions
			.find(session => session._id == req.body.id)

		if (pokerSession) {
			// Update poker session
			pokerSession.location = newLocation
			pokerSession.variation = newVariation
			pokerSession.gameType = newGameType
			pokerSession.date = newDate
			pokerSession.notes = newNotes
			pokerSession.buyIn = isNaN(newBuyIn)? pokerSession.buyIn : newBuyIn
			pokerSession.amountWon = isNaN(newAmountWon)? pokerSession.amountWon : newAmountWon

			user.save((err, saved) => {
				if (err) return next(err)
				res.json(saved.pokerSessions)
			})
		} else {
			next(new Error("pokerSession not found"))
		}

	})
})

module.exports = router;

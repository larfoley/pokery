const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const GameName = require('../models/Locations');
const keys = require('../config');
mongoose.connect(keys.db);


router.get('/:id', (req, res) => {
	GameName.getGameNames(req.params.id, (err, gameNames) => {
		if (err) {
			throw err;
		}
		res.json(gameNames);
	});
})

router.get('/:id/:_id', (req, res) => {
	GameName.getGameNameById(req.params._id, (err, gamename) => {
		if (err) {
			throw err;
		}
		res.json(gameName);
	});
});

router.post('/:id', (req, res) => {
	const gameName = req.body;
	gameName.userId = req.params.id
	GameName.addGameName(gameName, (err, gameName) => {
		if (err) {
			throw err;
		}
		res.json(gameName);
	});
});

router.put('/:id/:_id', (req, res) => {
	const id = req.params._id;
	const gameName = req.body.name;
	GameName.updateGameName(id, gameName, (err, gameName) => {
		if (err) {
			throw err;
		}
		res.json(gameName);
	});
});

router.delete('/:id/:_id', (req, res) => {
	const id = req.params._id;
	GameName.removeGameName(id, (err, gameName) => {
		if (err) {
			throw err;
		}
		res.json(gameName);
	});
});

module.exports = router;

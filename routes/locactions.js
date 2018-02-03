const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const GameName = require('../models/Locations');
const keys = require('../keys');
mongoose.connect(keys.db);


router.get('/', (req, res) => {
	GameName.getGameNames(req.params.id, (err, gameNames) => {
		if (err) {
			throw err;
		}
		res.json(gameNames);
	});
})

router.get('/api/gamenames/:id/:_id', (req, res) => {
	GameName.getGameNameById(req.params._id, (err, gamename) => {
		if (err) {
			throw err;
		}
		res.json(gamename);
	});
});

router.post('/api/gamenames/:id', (req, res) => {
	const gamename = req.body;
	gamename.userId = req.params.id
	GameName.addGameName(gamename, (err, gamename) => {
		if (err) {
			throw err;
		}
		res.json(gamename);
	});
});

module.exports = router;

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
		res.json(gameName);
	});
});

router.post('/api/gamenames/:id', (req, res) => {
	const gameName = req.body;
	gameName.userId = req.params.id
	GameName.addGameName(gameName, (err, gameName) => {
		if (err) {
			throw err;
		}
		res.json(gameName);
	});
});



module.exports = router;

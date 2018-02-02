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

module.exports = router;

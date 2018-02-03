const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const Location = require('../models/Locations');
const keys = require('../config');
mongoose.connect(keys.db);


router.get('/:id', (req, res) => {
	Location.getLocations(req.params.id, (err, location) => {
		if (err) {
			throw err;
		}
		res.json(location);
	});
})

router.get('/:id/:_id', (req, res) => {
	Location.getLocationById(req.params._id, (err, location) => {
		if (err) {
			throw err;
		}
		res.json(location);
	});
});

router.post('/:id', (req, res) => {
	const location = req.body;
	location.userId = req.params.id
	Location.addLocation(location, (err, location) => {
		if (err) {
			throw err;
		}
		res.json(location);
	});
});

router.put('/:id/:_id', (req, res) => {
	const id = req.params._id;
	const location = req.body;
	Location.updateLocation(id, location, (err, location) => {
		if (err) {
			throw err;
		}
		res.json(location);
	});
});

router.delete('/:id/:_id', (req, res) => {
	const id = req.params._id;
	Location.removeLocation(id, (err, gameName) => {
		if (err) {
			throw err;
		}
		res.json(gameName);
	});
});

module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const Session = require('../models/Locations');
const keys = require('../keys');
mongoose.connect(keys.db);

router.get('/api/session/:id', (req, res) => {
	Session.getSessions(req.params.id, (err, session) => {
		if (err) {
			throw err;
		}
		res.json(session);
	});
});
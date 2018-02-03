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

router.get('/api/session/:id/:_id', (req, res) => {
	Session.getSessionById(req.params._id, (err, session) => {
		if (err) {
			throw err;
		}
		res.json(session);
	});
});

router.post('/api/session/:id', (req, res) => {
	const session = req.body;
	session.userId = req.params.id
	Session.addSession(session, (err, session) => {
		if (err) {
			throw err;
		}
		res.json(session);
	});
});
const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

const Session = require('../models/Session');
const keys = require('../config');
mongoose.connect(keys.db);

router.get('/:id', (req, res) => {
	Session.getSessions(req.params.id, (err, session) => {
		if (err) {
			throw err;
		}
		res.json(session);
	});
});

router.get('/:id/:_id', (req, res) => {
	Session.getSessionById(req.params._id, (err, session) => {
		if (err) {
			throw err;
		}
		res.json(session);
	});
});

router.post('/:id', (req, res) => {
	const session = req.body;
	session.userId = req.params.id
	Session.addSession(session, (err, session) => {
		if (err) {
			throw err;
		}
		res.json(session);
	});
});

router.put('/:id/:_id', (req, res) => {
	const id = req.params._id;
	const session = req.body;
	Session.updateSession(id, session, (err, session) => {
		if (err) {
			throw err;
		}
		res.json(session);
	});
});

router.delete('/:id/:_id', (req, res) => {
	const id = req.params._id;
	Session.removeSession(id, (err, session) => {
		if (err) {
			throw err;
		}
		res.json(session);
	});
});

module.exports = router;

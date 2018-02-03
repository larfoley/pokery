const mongoose = require('mongoose');

const pokerSessionSchema = mongoose.Schema({
  userId: {
    type: String,
		required: true
  },
  selectGame:{
		type: String,
		required: true
  },
  earnings:{
		type: String,
		required: true
	 }
});

const Session = module.exports = mongoose.model('sessions', pokerSessionSchema);

module.exports.getSessions = (userId,callback) => Session.find({userId},callback);

module.exports.getSessionById = (id, callback) => Session.findById(id, callback);

module.exports.addSession = (session, callback) => Session.create(session, callback);

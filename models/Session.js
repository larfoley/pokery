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

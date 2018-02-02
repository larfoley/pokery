const mongoose = require('mongoose');

const pokerGameSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	 },
	userId:{
		type: String,
		required: true
	}
});

const GameName = module.exports = mongoose.model('games', pokerGameSchema);


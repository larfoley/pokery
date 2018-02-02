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

module.exports.getGameNames = (userId,callback) => GameName.find({userId},callback);

module.exports.getGameNameById = (id, callback) => GameName.findById(id, callback);

module.exports.addGameName = (gameName, callback) => GameName.create(gameName, callback);

module.exports.updateGameName = (id, name, callback) => GameName.findOneAndUpdate({_id: id}, {name}, {}, callback);

module.exports.removeGameName = (id, callback) => GameName.remove({_id: id}, callback);
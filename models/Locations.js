const mongoose = require('mongoose');

const pokerLocationSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  gameVariation: {
    type: String,
    required: true
  }
});

const Location = module.exports = mongoose.model('games', pokerLocationSchema);

module.exports.getLocations = (userId, callback) => Location.find({ userId }, callback);

module.exports.getLocationById = (id, callback) => Location.findById(id, callback);

module.exports.addLocation = (location, callback) => Location.create(location, callback);

module.exports.updateLocation = (id, pokerSessionSchema, callback) => Location.findOneAndUpdate({ _id: id },  pokerSessionSchema, {}, callback);

module.exports.removeLocation = (id, callback) => Location.remove({ _id: id }, callback);
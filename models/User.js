var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var pokerLocationSchema = mongoose.Schema({
  name: { type: String, required: true }
});

var pokerSessionSchema = mongoose.Schema({
  location: { type: String, required: true },
  variation: { type: String, required: true },
  gameType: { type: String, required: true },
  buyIn: { type: Number, required: true },
  amountWon: { type: String, required: true},
});

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  hash: String,
  pokerLocations: [pokerLocationSchema],
  pokerSessions: [pokerSessionSchema]
});

UserSchema.methods.validPassword = (password, hash, callback) => {
  bcrypt.compare(password, hash, function(err, res) {
    callback(err, res)
  });
}

var User = mongoose.model('User', UserSchema);


module.exports = User

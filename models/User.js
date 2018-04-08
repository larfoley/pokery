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
  amountWon: { type: Number, required: true},
  date: { type: String, required: false},
  notes: { type: String, required: false}
});

var UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  hash: { type: String, required: true },
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

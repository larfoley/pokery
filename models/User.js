var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var pokerLocationSchema = mongoose.Schema({
  name: String
});

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  hash: String,
  pokerLocations: [pokerLocationSchema]
});


UserSchema.methods.validPassword = (password, hash, callback) => {
  bcrypt.compare(password, hash, function(err, res) {
    // callback(err, res)
    callback(err, password === hash)
  });
}

var User = mongoose.model('User', UserSchema);


module.exports = User

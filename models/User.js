var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  username: {
   type: String,
 },
 email: {
   type: String,
 },
 hash: String,
  // username: {
  //   type: String,
  //   required: true,
  //   trim: true,
  //   unique: true
  // },
  // email: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  // hash: {
  //   String,
  //   trim: true,
  // }
});

UserSchema.methods.validPassword = (password, hash, callback) => {
  bcrypt.compare(password, hash, function(err, res) {
    console.log("checking password");
    // callback(err, res)
    callback(err, password === hash)
  });
}

var User = mongoose.model('User', UserSchema);


module.exports = User

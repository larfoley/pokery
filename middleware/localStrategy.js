var User = require('../models/User.js')
var LocalStrategy = require('passport-local').Strategy

module.exports = new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      user.validPassword(password, user.hash, (err, isValid) => {
        if (err) { return done(err); }
        if (!isValid) {
          return done(null, false, { message: 'Incorrect password.' });
        } else {
          return done(null, user);
        }
      })
    });
  }
)

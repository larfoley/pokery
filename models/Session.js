var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var SessionSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  hash: String,
});

SessionSchema.methods.validPassword = (password, hash, callback) => {
  bcrypt.compare(password, hash, function(err, res) {
    callback(err, res)
  });
}

var Session = mongoose.model('Session', SessionSchema);


module.exports = Session


/api/user/103/session/add

var requiresLogin = function(req, res, next) {
  if (!req,user) {
    res.json({error: ''})
  } else {
    next()
  }
}


router.get('/api/user:id/session/add', requiresLogin, (req, res) => {
  id = req.params.id;

  var Session = new Session({

  }).save()
})

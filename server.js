var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var session = require("express-session");
var bodyParser = require('body-parser')
var mongoose = require("mongoose")
var config = require("./config")
var db = mongoose.connect(config.db).connection
var passport = require('passport')
var localStrategy = require('./middleware/localStrategy')
var bcrypt = require('bcrypt');
var app = express()

// Routes
var register = require('./routes/register')
var login = require('./routes/login')
var logout = require('./routes/logout')
var profile = require('./routes/profile')
var livePokerTimetables = require('./routes/live-poker-timetables')
var livePokerTimetables = require('./routes/live-poker-timetables')


db.on('error', () => {
  console.error.call(console, 'error connecting to database')
})
db.once('open', () => {
  console.log("connected to database");
})

passport.use(localStrategy)
// serialized to the session, and deserialized when subsequent requests are made.
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.set('view engine', 'ejs')
// app.use(favicon(path.join(__dirname, 'client/build', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({ secret: "foobar" }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/register', register)
app.use('/api/live-poker-timetables', livePokerTimetables)
app.use('/api/login', login)
app.use('/api/logout', logout)
app.use('/api/profile', profile)

app.get('*', (req, res, next) => {
  if (process.env.ENVIROMENT === "production") {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
  } else {
    res.status(404).send({ error: 'resource not found' })
  }
});


module.exports = app;

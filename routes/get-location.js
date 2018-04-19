var router = require("express").Router()
var satelize = require('satelize')

router.get('/', (req, res, next) => {
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

  satelize.satelize({ip:'2a02:8084:80:6e00:3dcd:ffd6:93f1:d68'}, function(err, payload) {
    if (err) return next(err);
    res.json(payload)
  })

})

module.exports = router

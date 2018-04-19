var router = require("express").Router();
const rg = require('simple-reverse-geocoder')
const apiKey = 'AIzaSyCdyR0_TSNpFh_92s14HeH2beh37a_lM3o'

router.post('/', (req, res) => {
  longitude = req.body.longitude
  latitude = req.body.latitude
  console.log([ longitude, latitude ]);
  const loc = {
    type: 'Point',
    coordinates: [ longitude, latitude ]
  }

  rg.getAddress(loc, apiKey)
    .then(response => {
      console.log("res", response);
      res.json(response)
    })
    .catch(err => {
      console.log(":(", err);
      res.json(err)
    })

})

module.exports = router

const router = require('express').Router()
const casinos = require('../casinos')

router.get('/', (req, res, next) => {
  const country = req.query.country

  let countryIsSupported = !!casinos.find(casino => casino.country === country)

  if (!countryIsSupported) {
    return res.status(400).json({message: "country not supported"})
  }
  console.log(casinos
    .find(casino => casino.country === country)
    .casinos
    .map(casino => casino.name));
  res.json(
    casinos
      .find(casino => casino.country === country)
      .casinos
      .map(casino => casino.name)
  )

})

module.exports = router

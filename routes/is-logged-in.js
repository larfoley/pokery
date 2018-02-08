var router = require("express").Router();

router.get('/', (req, res) => {
  if (req.user) {
    res.status(200).json({logged_in: true})
  } else {
    res.status(200).json({logged_in: false})
  }
})

module.exports = router

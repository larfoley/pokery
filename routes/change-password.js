var router = require("express").Router();

router.post('/', (req, res) => {
  res.json({"req": req})
})

module.exports = router

var router = require("express").Router();

router.post('/', (req, res) => {
  res.json({"1":1})
})

module.exports = router

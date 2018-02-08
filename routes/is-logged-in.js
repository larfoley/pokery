var router = require("express").Router();

router.get('/', (req, res) => {
  // console.log(req.user);
  res.json({user: req.user})
  // if (req.user) {
  //   res.status(200).json({logged_in: true, user: req.user})
  // } else {
  //   res.status(200).json({logged_in: false, user: req.user})
  // }
})

module.exports = router

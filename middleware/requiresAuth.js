module.exports = (req, res, next) => {
	if (!req.user) {
		res.status(401).json({message: "user is not authorized"})
	} else {
		next()
	}
}

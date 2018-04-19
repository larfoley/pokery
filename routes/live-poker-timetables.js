var express = require('express')
var router = express.Router()
const rp = require('request-promise')
const pokerGames = require('./poker-games')
const scrapeLivePoker = require('./scrape-live-poker')
let tournamentsGames = []

router.get('/', (req, res, next) => {

	const dayToFilterBy = req.query.day
	// const country = req.query.country
	const country = 'Ireland'

	function getHtml(url) {
		return rp(url);
	}

	function workMyCollection(urls) {
		return urls.reduce((promise, url) => {
			return promise
			.then((html) => {
				return getHtml(url).then(html => {
					tournamentsGames = tournamentsGames.concat(scrapeLivePoker(html))
				});
			})
			.catch(console.error);
		}, Promise.resolve());
	}

	if (pokerGames.hasOwnProperty(country)) {

		workMyCollection(pokerGames[country])
		  .then(() => {
				if (dayToFilterBy) {
					tournamentsGames = tournamentsGames.filter(game => game.day === dayToFilterBy)
				}
				res.json(tournamentsGames)
			})
			.catch(err => next(err))

	} else {
		next(new Error("Your country is not supported"))
	}




});


module.exports = router;

var express = require('express')
var router = express.Router()
const rp = require('request-promise')
const casinos = require('../casinos')
const scrapeLivePoker = require('./scrape-live-poker')
let tournamentsGames = []

router.get('/', (req, res, next) => {

	const dayToFilterBy = req.query.day
	const country = req.query.country
	let countryIsSupported = !!casinos.find(casino => casino.country === country)

	if (!countryIsSupported) {
		console.log("country not supported");
		return res.status(400).json({message: "country not supported"})
	}

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

	const casinosURLs = casinos.find(casino => casino.country === country).casinos

	workMyCollection(casinosURLs)
	  .then(() => {
			console.log(dayToFilterBy, 'day');
			if (dayToFilterBy) {
	
				tournamentsGames = tournamentsGames.filter(
					game => game.day.toLowerCase() === dayToFilterBy.toLowerCase()
				)
				console.log(tournamentsGames);
			}
			res.json(tournamentsGames)
		})
		.catch(err => next(err))


});


module.exports = router;

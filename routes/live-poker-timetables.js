var express = require('express')
var router = express.Router()
const rp = require('request-promise')
const scrapeLivePoker = require('./scrape-live-poker')
let tournamentsGames = []
const fitzwilliamURL = "https://en.clubpoker.net/poker-tournaments/the-fitzwilliam-casino-card-club/ireland/0-426-0-0-0-0-0-111"
const theSportingEmporiumURL = "https://en.clubpoker.net/poker-tournaments/the-sporting-emporium/ireland/0-394-0-0-0-0-0-111"
const villageGreenCardClubURL = "https://en.clubpoker.net/poker-tournaments/village-green-card-club/ireland/0-387-0-0-0-0-0-111"

router.get('/', (req, res, next) => {

	const dayToFilterBy = req.query.day

	rp(theSportingEmporiumURL)
		.then(html => {
			tournamentsGames = scrapeLivePoker(html)
			return rp(fitzwilliamURL)
		})
		.then(html => {
			tournamentsGames = tournamentsGames.concat(scrapeLivePoker(html))
			return rp(villageGreenCardClubURL)
		})
		.then(html => {
			tournamentsGames = tournamentsGames.concat(scrapeLivePoker(html))
		})
		.then(response => {
			if (dayToFilterBy) {
				tournamentsGames = tournamentsGames.filter(game => game.day === dayToFilterBy)
			}
			res.json(tournamentsGames)
		})
		.catch(err => next(err))

});


module.exports = router;

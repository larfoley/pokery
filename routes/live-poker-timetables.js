var express = require('express');
var router = express.Router();
const request = require('request');
const cheerio = require('cheerio');
const gr = require('./data/green-room');

const tournamentsGames = [gr];

router.get('/api', (req, res) => {
	const { day } = req.query;
	let x = request('http://en.clubpoker.net/poker-tournaments',  (error, response, html) => {
	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);
		const div = $('#ipsLayout_mainArea').children('.tournamentItem');
		div.map((i, element) => {
			const tournamentsGame = {};
			tournamentsGame.day =  $(element).children('.tournamentItemDate').children('.dateDay').text().trim()

			if (tournamentsGame.day !== "") {
				tournamentsGame.date = $(element).children('.tournamentItemDate').children('.dateInfos').children('.date').text().trim()
				tournamentsGame.time = $(element).children('.tournamentItemDate').children('.dateInfos').children('.hour').text().trim()
				tournamentsGame.buyIn = $(element).children('.nextOccurrenceResult').children('.buyin').text().trim()
				tournamentsGame.tournamentName = $(element).children('.nextOccurrenceResult').children('.tournamentTitle').text().trim()
				if($(element).children('.nextOccurrenceResult').children('div').children('span').hasClass('tournamentGaranteed')) {
					tournamentsGame.prize = $(element).children('.nextOccurrenceResult').children('div').children('.tournamentGaranteed').text().trim()
					tournamentsGame.type = $(element).children('.nextOccurrenceResult').children('.tournamentTitle').next().next().text().trim()
					tournamentsGame.address = $(element).children('.nextOccurrenceResult').children('.tournamentTitle').next().next().next().text().trim()
				} else {
					tournamentsGame.type = $(element).children('.nextOccurrenceResult').children('.tournamentTitle').next().text().trim()
					tournamentsGame.address = $(element).children('.nextOccurrenceResult').children('.tournamentTitle').next().next().text().trim()
				}
				tournamentsGames.push(tournamentsGame);
			}
		});
	}
	if(day === undefined) {
		res.json(tournamentsGames);
	} else {
		const arr = [];
		const map1 = tournamentsGames.map(x => {
			if(x.day === day) {
				arr.push(x)
			}
		})
		res.json(arr);
		}
	})
});


module.exports = router;

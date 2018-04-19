const cheerio = require('cheerio')

const tournamentItemDate = itemDate =>
  itemDate.children('.tournamentItemDate').children('.dateInfos')

const formatText = text =>
  text.text().trim()

const tourneyTitle = title =>
  title.children('.nextOccurrenceResult').children('.tournamentTitle')
const scrapeLivePoker = (html) => {

  let tournamentsGames = []
  let id = 0
  const $ = cheerio.load(html)

  $('#ipsLayout_mainArea')
    .children('.tournamentItem')
    .map((i, element) => {

      const tournamentsGame = {
        id,
        day: formatText($(element)
          .children('.tournamentItemDate')
          .children('.dateDay')),
        prize: formatText($(element)
          .children('.nextOccurrenceResult')
          .children('div')
          .children('.tournamentGaranteed'))
      };


      if (tournamentsGame.day !== "" && tournamentsGame.prize !== "") {

        id++;
        tournamentsGame.date = formatText(tournamentItemDate($(element)).children('.date'))
        tournamentsGame.time = formatText(tournamentItemDate($(element)).children('.hour'))
        let x = formatText($(element).children('.nextOccurrenceResult').children('.buyin'))
        x = x.split(" ")
        tournamentsGame.currency = x[1]
        tournamentsGame.buyIn = x[0]

        tournamentsGame.tournamentName = formatText(tourneyTitle($(element)))
        if ($(element).children('.nextOccurrenceResult').children('div').children('span').hasClass('tournamentGaranteed')) {
          tournamentsGame.prize = formatText($(element).children('.nextOccurrenceResult').children('div').children('.tournamentGaranteed'))
          tournamentsGame.type = formatText(tourneyTitle($(element)).next().next())
          tournamentsGame.address = formatText(tourneyTitle($(element)).next().next().next())
        } else {
          tournamentsGame.type = formatText(tourneyTitle($(element).next()))
          tournamentsGame.address = formatText(tourneyTitle($(element).next().next()))
        }

        tournamentsGames.push(tournamentsGame);
      } else if (tournamentsGame.day !== "") {
        tournamentsGame.date = formatText(tournamentItemDate($(element)).children('.date'))
        tournamentsGame.time = formatText(tournamentItemDate($(element)).children('.hour'))
        let x = formatText($(element).children('.nextOccurrenceResult').children('.buyin'))
        x = x.split(" ")
        tournamentsGame.currency = x[1]
        tournamentsGame.buyIn = x[0]

        if ($(element).children('.nextOccurrenceResult').children('div').children('span').hasClass('tournamentGaranteed')) {
          tournamentsGame.prize = formatText($(element).children('.nextOccurrenceResult').children('div').children('.tournamentGaranteed'))
          tournamentsGame.type = formatText(tourneyTitle($(element)).next().next())
          tournamentsGame.address = formatText(tourneyTitle($(element)).next().next())
        } else {
          tournamentsGame.type = formatText(tourneyTitle($(element).next().next()))
          tournamentsGame.address = formatText(tourneyTitle($(element)).next().next())
        }
        tournamentsGames.push(tournamentsGame);

      }
    });


  return tournamentsGames
}

module.exports = scrapeLivePoker

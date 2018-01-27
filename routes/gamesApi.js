var express = require('express');
var router = express.Router();

const vg =  {
	name:"The Village Green Card Club",
	games: [
		
			{
				day: "Monday",
				time: "8PM",
				buyIn: "€30",
				reg: "€10",
				type: "NLHE"
			},
			 {
				day :"Tuesday",
				time: "8PM",
				uyIn: "€40",
				reg: "€10",
				type: "NLHE Freezeout"
			},
			{
				day : "Wednesday",
				time: "8PM",
				buyIn: "€30",
				reg: "€10",
				type: "NLHE"
			},
			{
				day: "Thursday",
				time: "8PM",
				buyIn: "€55",
				reg: "€10",
				type: "NLHE"
			},
			{
				day: "Friday",
				time: "8PM",
				buyIn: "€30",
				reg: "€10",
				type: "NLHE"
			},
			{
				day: "Saturday",
				time: "3PM",
				buyIn: "€30",
				reg: "€10",
				type: "NLHE"
			},
			{
				day: "Sunday",
				time: "4PM",
				buyIn: "€65",
				reg: "€15",
				type: "NLHE Deepstack Freezeout"
			}
			
		
	]
}

const fitz =  {
	name: "Fitzwilliam Card Club",
	games: [
			{
				day: "Monday",
				time: "8PM",
				buyIn: "€80",
				reg: "€7",
				type: "Deepstack Freezeout"
			},
			{
				day: "Tuesday",
				time: "8PM",
				buyIn: "€53",
				reg: "€7",
				type: "Hold’em NL Double Chance Freezeout"
			},
			{
				day: "Wednesday",
				time: "8PM",
				buyIn: "€53",
				reg: "€7",
				type: "Hold’em NL Freezeout"
			},
			{
				day: "Thursday",
				time: "8PM",
				buyIn: "€58",
				reg: "€7",
				type: "Triple Chance Freezeout"
			},
			{
				day: "Friday",
				time: "8PM",
				buyIn: "€73",
				reg: "€7",
				type: "Hold’em NL Double Chance"
			},
			{
				day: "Saturday",
				time: "8PM",
				buyIn: "€103",
				reg: "€12",
				type: "Hold’em NL Deepstack Freezeout"
			},
			{
				day: "Saturday",
				time: "9PM",
				buyIn: "€20",
				reg: "€5",
				type: "Hold’em NL Freezeout"
			},
			{
				day: "Sunday",
				time: "8PM",
				buyIn: "€53",
				reg: "€7",
				type: "Hold’em NL Freezeout"
			}
	]
}
const gr =  {
	name:"The Green Room Bar",	
    games: [
            {
				day: "Tuesday",
                time: "8PM"
            }
    ]
}

const output = [gr, fitz, vg];

router.get('/', (req, res) => {
	const { day } = req.query;
	console.log(day);
	if(day === undefined) {
		res.json(output);
	} else {
        const arr = [];
        
		const map1 = output.map(x => {
			x.games.map(y => {
				if(y.day === day) {
					y.name = x.name;
					arr.push(y)
				}
				
			})
        })
		res.json(arr);
	}
});


module.exports = router;

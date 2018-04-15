import React from "react"
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts'
import ChartContainer from '../../../shared/ChartContainer'

import RandomColor from './RandomColor.js'


const CashVsTournament = props => {

  const filterByGameType = (type) => (
    (session) => {
      return session.gameType === type
    }
  )

  const data = []
  const sessionsByLocation = {}
  const locations = props.locations.map(l => l.name)
  const randomColor = new RandomColor()

  // Group session by location
  locations.forEach(location => {
    sessionsByLocation[location] = props.sessions
      .filter(session => session.location === location)
  })

  for (var key in sessionsByLocation) {
    if (sessionsByLocation.hasOwnProperty(key)) {

      let cashGamesEarnings = sessionsByLocation[key]
        .filter(filterByGameType("Cash Games"))
        .map(session => session.amountWon - session.buyIn)
        .reduce((a,b) => a + b, 0)

        data.push({
          name: key + " Cash Games",
          value: cashGamesEarnings
        })

      let tournamentGamesEarnings = sessionsByLocation[key]
        .filter(filterByGameType("tournament"))
        .map(session => session.amountWon - session.buyIn)
        .reduce((a,b) => a + b, 0)

        data.push({
          name: key + " Tournament Games",
          earnings: tournamentGamesEarnings
        })
    }
  }

  return (

    data.length > 0 ?
      <ChartContainer>
        <ResponsiveContainer>
          <PieChart width={730} height={250}>
            <Pie
              data={data}
              dataKey="earnings"
              cx="50%" cy="50%"
              outerRadius={80}
              labelLine={false}
              label
              >
              {
                data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={randomColor.generateUnique()}/>
                ))
              }
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
        :
      <p>Not enough data to display chart</p>
  )
}

export default CashVsTournament

import React from "react"
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer
} from 'recharts'
import ChartContainer from '../../../shared/ChartContainer'
import colors from '../colors'

const BestGameTypeChart = props => {
  const sessions = props.sessions

  const calculateEarnings = (sessions, gameType) => {
    return sessions
      .filter(session => session.gameType === gameType)
      .map(game => game.amountWon - game.buyIn)
      .reduce((a,b) => a + b)
  }
  const cashGamesEarnings = calculateEarnings(sessions, "Cash Game")
  const tournamentGamesEarnings = calculateEarnings(sessions, "tournament")

  const data = [
    {
      name: "",
      Cash: cashGamesEarnings,
      Tournaments: tournamentGamesEarnings
    }
  ]

  return (
    data.length > 0?
      <ChartContainer>
        <ResponsiveContainer>
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'games won', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Cash" fill={colors[0]} />
            <Bar dataKey="Tournaments" fill={colors[1]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      :
      <p>Not enough data to display chart.</p>
  )
}

export default BestGameTypeChart

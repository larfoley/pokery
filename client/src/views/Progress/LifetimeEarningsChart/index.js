import React from "react"
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer
} from 'recharts'
import ChartContainer from '../../../shared/ChartContainer'

const LifetimeEarningsChart = props => {

  const cashGamesTotal = props.sessions
    .filter(game => game.gameType === "Cash Game")
    .map(game => game.amountWon - game.buyIn)
    .reduce((a, b) => a + b, 0)

  const tournamentGamesTotal = props.sessions
    .filter(game => game.gameType === "tournament")
    .map(game => game.amountWon - game.buyIn)
    .reduce((a, b) => a + b, 0)

  const data = [
    {
      date: '',
      cash: cashGamesTotal,
      tournament: tournamentGamesTotal,
      amt: 2400
    }
  ];

  return (
    data.length > 0 ?
      <ChartContainer>
        <ResponsiveContainer>
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tournament" fill="#8884d8" />
            <Bar dataKey="cash" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
        :
      <p>Not enough data to display chart</p>
  )
}

export default LifetimeEarningsChart

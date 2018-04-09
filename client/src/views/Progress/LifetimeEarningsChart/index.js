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
  Bar
} from 'recharts'

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
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="tournament" fill="#8884d8" />
      <Bar dataKey="cash" fill="#82ca9d" />
    </BarChart>
    // <AreaChart
    //   width={750}
    //   height={250}
    //   data={data}
    //   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    //   >
    //   <defs>
    //     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
    //       <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
    //       <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    //     </linearGradient>
    //     <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
    //       <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
    //       <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    //     </linearGradient>
    //   </defs>
    //   <XAxis dataKey="name" />
    //   <YAxis label={{ value: '€', position: 'insideTopLeft' }} />
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <Tooltip />
    //   <Legend />
    //   <Area type="monotone"
    //     dataKey="Cash"
    //     stroke="#8884d8"
    //     fillOpacity={1}
    //     fill="url(#colorUv)"
    //   />
    //   <Area
    //     type="monotone"
    //     dataKey="Tournament"
    //     stroke="#82ca9d"
    //     fillOpacity={1}
    //     fill="url(#colorPv)"
    //   />
    // </AreaChart>
  )
}

export default LifetimeEarningsChart

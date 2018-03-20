import React from "react"
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  Legend
} from 'recharts'

const BestGameTypeChart = props => {

  const data = props.sessions.map(session => ({
    name: 'Village Green',
    Cash: 10,
    Tournaments: 19,
    amt: 100
  }))

  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis label={{ value: 'games won', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="Cash" fill="#8884d8" />
      <Bar dataKey="Tournaments" fill="#82ca9d" />
    </BarChart>
  )
}

export default BestGameTypeChart

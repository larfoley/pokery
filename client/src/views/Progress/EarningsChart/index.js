import React from "react"
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
} from 'recharts'

const EarningsChart = props => {

  const data = props.sessions.map(session => ({
    name: 'Jan',
    Cash: 400,
    Tournament: 240,
    amt: session.amountWon
  }))

  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={"name"} />
      <YAxis label={{ value: '€', position: 'insideTopLeft' }} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Cash"
        stroke="#82ca9d"
      />
    </LineChart>
  )
}

export default EarningsChart

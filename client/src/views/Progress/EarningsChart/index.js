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

// location: { type: String, required: true },
// variation: { type: String, required: true },
// gameType: { type: String, required: true },
// buyIn: { type: Number, required: true },
// amountWon: { type: String, required: true},
// 2018-04-11
const EarningsChart = props => {


  let total = 0;
  const data = props.sessions.map((session, i) => {
    total += parseInt(session.amountWon)
    return {
      name: session.date,
      earnings: total,
    }
  })
  console.log(data);
  return (
    data.length ?
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
        dataKey="earnings"
        stroke="#82ca9d"
      />
    </LineChart> :

    <p>Not enough data to display chart.</p>
  )
}

export default EarningsChart

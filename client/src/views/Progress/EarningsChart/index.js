import React from "react"
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer
} from 'recharts'
import ChartContainer from '../../../shared/ChartContainer'

const months = [
  {name: "January", short_name: "Jan"},
  {name: "February", short_name: "Feb"},
  {name: "March", short_name: "March"},
  {name: "April", short_name: "April"},
  {name: "May", short_name: "May"},
  {name: "June", short_name: "June"},
  {name: "July", short_name: "July"},
  {name: "August", short_name: "August"},
  {name: "September", short_name: "September"},
  {name: "October", short_name: "October"},
  {name: "November", short_name: "November"},
  {name: "December", short_name: "December"}
]

const EarningsChart = props => {

  let total = 0;
  const data = props.sessions.map((session, i) => {
    total += parseInt(session.amountWon - session.buyIn)
    return {
      name: months[new Date(session.date).getMonth()].short_name,
      earnings: total,
    }
  })

  return (
    data.length ?
    <ChartContainer>
      <ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"name"} />
            <YAxis label={{ value: '', position: 'insideTopLeft' }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="earnings"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
    </ChartContainer>
     :
    <p>Not enough data to display chart.</p>
  )
}

export default EarningsChart

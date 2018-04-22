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
import colors from '../colors'

const months = [
  {name: "January", short_name: "Jan"},
  {name: "February", short_name: "Feb"},
  {name: "March", short_name: "March"},
  {name: "April", short_name: "Apr"},
  {name: "May", short_name: "May"},
  {name: "June", short_name: "Jun"},
  {name: "July", short_name: "Jul"},
  {name: "August", short_name: "Aug"},
  {name: "September", short_name: "Sep"},
  {name: "October", short_name: "Oct"},
  {name: "November", short_name: "Nov"},
  {name: "December", short_name: "Dec"}
]

const EarningsChart = props => {

  let total = 0;
  const data = props.sessions.map((session, i) => {
    total += parseInt(session.amountWon - session.buyIn, 10)

    return {
      name: session.date ? months[new Date(session.date).getMonth()].short_name : null,
      earnings: total,
      date: new Date(session.date)
    }
  })

  data.sort((chartData1,chartDate2) => chartData1.date < chartDate2.date ? -1 : chartData1.date > chartDate2.date ?  1: 0);

  console.log(data)
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
              stroke={colors[0]}
            />
          </LineChart>
        </ResponsiveContainer>
    </ChartContainer>
     :
    <p>Not enough data to display chart.</p>
  )
}

export default EarningsChart

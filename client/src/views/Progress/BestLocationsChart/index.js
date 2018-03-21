import React from "react"
import {
  PieChart,
  Pie,
  Legend
} from 'recharts'

const BestLocationsChart = props => {

  // const data = props.sessions.map(session => ({
  //   name: session.name, value: 29
  // }))

  const data01 = [
    {name: 'Green Room', value: 29},
    {name: 'Village Green', value: 22},
    {name: 'Fitzwilliam Casino', value: 11},
    {name: 'Green Room', value: 19}
  ]

  return (
    <PieChart width={730} height={250}>
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={90}
        fill="#82ca9d"
        legend
      />
      <Legend />
    </PieChart>
  )

}

export default BestLocationsChart

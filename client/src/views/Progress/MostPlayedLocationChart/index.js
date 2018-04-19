import React from "react"
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer
} from 'recharts'
import ChartContainer from '../../../shared/ChartContainer'
import colors from '../colors'
import RandomColor from '../RandomColor'

const MostPlayedLocationChart = props => {
  const randomColor = new RandomColor()
  const locations = []

  props.sessions.forEach(session => {
    let locationExists = false

    locations.forEach(l => {
      if (session.location === l) {
        locationExists = true
      }
    })

    if (!locationExists) {
      locations.push(session.location)
    }
  })

  let data = []

  locations.forEach(location => {

    // return array of sessions mapped to the same location
    let sessions = props.sessions.filter(session => {
      if (session.location === location) {
        return session
      } else {
        return null
      }
    })

    data.push({name: sessions[0].location, value: sessions.length})
  })



  return (
    data.length > 0 ?
    <ChartContainer>
      <ResponsiveContainer>
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%" cy="50%"
            labelLine={false}
            outerRadius={80}
          >
            {
              data.map((obj, i) => (
                <Cell
                  key={i}
                  fill={data.length > colors.length?
                    randomColor.generateUnique() : colors[i]
                  }/>
              ))
            }
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
       :
      <p>Not enough data to display chart.</p>
  )

}

export default MostPlayedLocationChart

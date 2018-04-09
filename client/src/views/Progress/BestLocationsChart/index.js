import React from "react"
import {
  PieChart,
  Pie,
  Legend
} from 'recharts'

const BestLocationsChart = props => {

  const mostSuccesfullLocations = []
  const locations = []
  const sessionsFilteredByLocation = {}

  // get all locations
  props.sessions.map(session => {
    let locationExists = false
    let location;

    locations.forEach(l => {
      if (session.location === l) {
        locationExists = true
      }
    })

    if (!locationExists) {
      locations.push(session.location)
    }
  })

  // filter sessions by location
  locations.forEach(location => {
    sessionsFilteredByLocation[location] = props.sessions
      .filter(session => session.location === location)
  })

  // Calclate total earnings of each location
  for (var key in sessionsFilteredByLocation) {
    let totalEarnings = 0

    sessionsFilteredByLocation[key].forEach(session => {
      totalEarnings += parseInt(session.amountWon - session.buyIn)
    })

    mostSuccesfullLocations.push({
      name: key,
      value: totalEarnings
    })

  }

  return (
    <PieChart width={730} height={250}>
      <Pie
        data={mostSuccesfullLocations}
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

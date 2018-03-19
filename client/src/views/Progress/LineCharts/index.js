import React from "react"
import SectionTitle from "../../../shared/SectionTitle"
import PageSection from "../../../shared/PageSection"
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  LineChart,
} from 'recharts'

const data = [
  {name: 'Jan', Cash: 400, Tournament: 240, amt: 200},
  {name: 'Feb', Cash: 300, Tournament: 138, amt: 221},
  {name: 'March', Cash: 200, Tournament: 680, amt: 229},
  {name: 'April', Cash: 278, Tournament: 308, amt: 200},
  {name: 'May', Cash: 189, Tournament: 400, amt: 218},
  {name: 'June', Cash: 239, Tournament: 300, amt: 250},
  {name: 'July', Cash: 349, Tournament: 430, amt: 210},
]

const LineCharts = props => {
  return (
    <PageSection>
      <SectionTitle title="Earnings"/>
        <LineChart width={730} 
          height={250}
          data={data}
          margin={
            { 
              top: 5, 
              right: 30, 
              left: 20, 
              bottom: 5 
            }
          }
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: '€', position: 'insideTopLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Cash" stroke="#82ca9d" />
        </LineChart>
    </PageSection>
  )
}

export default LineCharts
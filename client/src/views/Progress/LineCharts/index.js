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

const LineCharts = props => {
  return (
    <PageSection>
      <SectionTitle title={props.title}/>
        <LineChart width={730} 
          height={250}
          data={props.data}
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
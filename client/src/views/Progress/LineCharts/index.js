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
        <LineChart 
          width={props.width} 
          height={props.height}
          data={props.data}
          margin={props.margin}
        >
          <CartesianGrid strokeDasharray={props.strokeDasharray} />
          <XAxis dataKey={props.xDataKey} />
          <YAxis label={props.label} />
          <Tooltip />
          <Legend />
          <Line 
            type={props.type} 
            dataKey={props.lineDataKey} 
            stroke={props.stroke} 
          />
        </LineChart>
    </PageSection>
  )
}

export default LineCharts
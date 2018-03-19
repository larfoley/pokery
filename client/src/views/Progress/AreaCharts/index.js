import React from "react"
import SectionTitle from "../../../shared/SectionTitle"
import PageSection from "../../../shared/PageSection"
import {
  AreaChart,
  Area,
  linearGradient,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
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

const AreaCharts = props => {
  return (
    <PageSection>
      <SectionTitle title={props.title}/>
        <AreaChart width={props.width} height={props.height} data={props.data}
          margin={props.margin}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis label={props.yLabel} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey={props.dataKey1} stroke={props.stroke1} fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey={props.dataKey2} stroke={props.stroke2} fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
    </PageSection>
  )
}

export default AreaCharts

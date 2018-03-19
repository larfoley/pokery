import React from "react"
import SectionTitle from "../../../shared/SectionTitle"
import PageSection from "../../../shared/PageSection"
import PageContainer from '../../../App/PageContainer'
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  Legend,
} from 'recharts'


const dataBar = [
  {name: 'Village Green', Cash: 10, Tournaments: 19, amt: 100},
  {name: 'Fitzwilliam Casino', Cash: 15, Tournaments: 7, amt: 100},
  {name: 'Macau Casino', Cash: 2, Tournaments: 9, amt: 100},
  // {name: 'Eglinton', Cash: 6, Tournaments: 3, amt: 100},
  // {name: 'Sporting Emporium', Cash: 8, Tournaments: 9, amt: 100},
  // {name: 'Penthouse Casino', Cash: 1, Tournaments: 11, amt: 100},
  {name: 'Green Room', Cash: 17, Tournaments: 2, amt: 100},
]

const BarCharts = props => {
  return (
    <div>
        <PageSection>
          <SectionTitle title={props.title}/>
          <BarChart width={props.width} height={props.height} data={props.data}>
            <CartesianGrid strokeDasharray={props.strokeDasharray} />
            <XAxis dataKey={props.xDataKey} />
            <YAxis label={props.label} />
            <Tooltip />
            <Legend />
            <Bar dataKey={props.dataKey1} fill={props.fill1} />
            <Bar dataKey={props.dataKey2} fill={props.fill2} />
          </BarChart>
        </PageSection>
    </div>
  )

}



export default BarCharts

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
          <SectionTitle title="Most Successful Game Type"/>
          <BarChart width={730} height={250} data={dataBar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'games won', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Cash" fill="#8884d8" />
            <Bar dataKey="Tournaments" fill="#82ca9d" />
          </BarChart>
        </PageSection>
    </div>
  )

}



export default BarCharts

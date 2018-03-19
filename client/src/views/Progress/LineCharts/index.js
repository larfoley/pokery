import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
import Table from '../../shared/Table'
import PieCharts from './PieCharts'
import BarCharts from './BarCharts'

import {
  AreaChart,
  Area,
  linearGradient,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  Legend,
  Pie,
  PieChart,
  Line,
  LineChart,
  Label
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

const dataBar = [
  {name: 'Village Green', Cash: 10, Tournaments: 19, amt: 100},
  {name: 'Fitzwilliam Casino', Cash: 15, Tournaments: 7, amt: 100},
  {name: 'Macau Casino', Cash: 2, Tournaments: 9, amt: 100},
  // {name: 'Eglinton', Cash: 6, Tournaments: 3, amt: 100},
  // {name: 'Sporting Emporium', Cash: 8, Tournaments: 9, amt: 100},
  // {name: 'Penthouse Casino', Cash: 1, Tournaments: 11, amt: 100},
  {name: 'Green Room', Cash: 17, Tournaments: 2, amt: 100},
]

const data01 = [
  {name: 'Green Room', value: 29},
  {name: 'Village Green', value: 22},
  {name: 'Fitzwilliam Casino', value: 11},
  {name: 'Green Room', value: 19}
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
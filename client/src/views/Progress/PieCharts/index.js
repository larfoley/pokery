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

const PieCharts = props => {
  return (
    <div>
        <PageSection>
        <SectionTitle title="Most Played Game Location"/>
            <PieChart width={730} height={250}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                label />
            <Legend />
          </PieChart>
        </PageSection>
    </div>
  )

}



export default PieCharts

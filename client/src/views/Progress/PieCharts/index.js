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

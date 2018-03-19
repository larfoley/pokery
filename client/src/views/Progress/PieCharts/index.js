import React from "react"
import SectionTitle from "../../../shared/SectionTitle"
import PageSection from "../../../shared/PageSection"
import {
  Legend,
  Pie,
  PieChart,
} from 'recharts'


const PieCharts = props => {
  return (
    <div>
        <PageSection>
        <SectionTitle title={props.title}/>
            <PieChart width={props.width} height={props.height}>
              <Pie
                data={props.data}
                dataKey={props.dataKey}
                nameKey={props.nameKey}
                cx={props.cx}
                cy={props.cy}
                outerRadius={props.outerRadius}
                fill={props.fill}
                label />
            <Legend />
          </PieChart>
        </PageSection>
    </div>
  )

}



export default PieCharts

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
            <PieChart width={730} height={250}>
              <Pie
                data={props.data}
                dataKey={props.dataKey}
                nameKey={props.nameKey}
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill={props.fill}
                label />
            <Legend />
          </PieChart>
        </PageSection>
    </div>
  )

}



export default PieCharts

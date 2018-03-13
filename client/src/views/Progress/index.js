import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
import Table from '../../shared/Table'
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
  PieChart
} from 'recharts'

const data = [
  {name: 'Jan', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Feb', uv: 3000, pv: 1398, amt: 2210},
  {name: 'March', uv: 2000, pv: 9800, amt: 2290},
  {name: 'April', uv: 2780, pv: 3908, amt: 2000},
  {name: 'May', uv: 1890, pv: 4800, amt: 2181},
  {name: 'June', uv: 2390, pv: 3800, amt: 2500},
  {name: 'July', uv: 3490, pv: 4300, amt: 2100},
]

const dataBar = [
  {name: 'Village Green', cashgames: 10, tournaments: 19, amt: 100},
  {name: 'Fitzwilliam Casino', cashgames: 15, tournaments: 7, amt: 100},
  {name: 'Macau Casino', cashgames: 2, tournaments: 9, amt: 100},
  // {name: 'Eglinton', cashgames: 6, tournaments: 3, amt: 100},
  // {name: 'Sporting Emporium', cashgames: 8, tournaments: 9, amt: 100},
  // {name: 'Penthouse Casino', cashgames: 1, tournaments: 11, amt: 100},
  {name: 'Green Room', cashgames: 17, tournaments: 2, amt: 100},
]



const data01 = [
  {name: 'Group A', value: 400},
  {name: 'Group B', value: 300},
  {name: 'Group C', value: 300},
  {name: 'Group D', value: 200}
]


const data02 = [
  {name: 'A1', value: 100},
  {name: 'A2', value: 300},
  {name: 'B1', value: 100},
  {name: 'B2', value: 80},
  {name: 'B3', value: 40},
  {name: 'B4', value: 30},
  {name: 'B5', value: 50},
  {name: 'C1', value: 100},
  {name: 'C2', value: 200},
  {name: 'D1', value: 150},
  {name: 'D2', value: 50}
]

const Home = props => {
  return (
    <div>
      <Header />
      <Sidebar />
      <PageContainer>

        <PageSection>
          <SectionTitle title="Lifetime Progress"/>
          <Table rows={[
            [ {data: "Earnings: ", type: "th"}, {data: "$2590", type: "td"} ],
            [ {data: "Win Rate: ", type: "th"}, {data: "27%", type: "td"} ],
            [ {data: "Most Scuccesfull Location", type: "th"}, {data: "Merrion", type: "td"} ],
            [ {data: "Most Scuccesfull Variation", type: "th"}, {data: "Texas Hold'em", type: "td"} ]
          ]}/>
        </PageSection>

        <PageSection>
          <SectionTitle title="Life Time Earnings"/>
            <AreaChart width={730} height={250} data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
             <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> 
              <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </PageSection>

        <PageSection>
          <SectionTitle title="Most Successful Game Type"/>
          <BarChart width={730} height={250} data={dataBar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cashgames" fill="#8884d8" />
            <Bar dataKey="tournaments" fill="#82ca9d" />
          </BarChart>
        </PageSection>


        <PageSection>
        <SectionTitle title="Win Rate"/>
              <PieChart width={730} height={250}>
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8" />
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#82ca9d"
                  label />
              </PieChart>
              
            </PageSection>

      </PageContainer>
      <Footer />
    </div>
  )

}



export default Home

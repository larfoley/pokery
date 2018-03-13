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
  {name: 'Jan', uv: 400, pv: 240, amt: 200},
  {name: 'Feb', uv: 300, pv: 138, amt: 221},
  {name: 'March', uv: 200, pv: 680, amt: 229},
  {name: 'April', uv: 278, pv: 308, amt: 200},
  {name: 'May', uv: 189, pv: 400, amt: 218},
  {name: 'June', uv: 239, pv: 300, amt: 250},
  {name: 'July', uv: 349, pv: 430, amt: 210},
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
          <SectionTitle title="Life Time Earnings By Wins"/>
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
            <Bar dataKey="Cash" fill="#8884d8" />
            <Bar dataKey="Tournaments" fill="#82ca9d" />
          </BarChart>
        </PageSection>


        <PageSection>
        <SectionTitle title="Most Successful Game Location By Victories"/>
              <PieChart width={730} height={250}>
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  fill="#82ca9d"
                  label />
              <Legend />
              </PieChart>
              
            </PageSection>

      </PageContainer>
      <Footer />
    </div>
  )

}



export default Home

import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
import Table from '../../shared/Table'
import PieCharts from './PieCharts'
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
            [ {data: "Most Successful Location", type: "th"}, {data: "Merrion", type: "td"} ],
            [ {data: "Most Successful Variation", type: "th"}, {data: "Texas Hold'em", type: "td"} ]
          ]}/>
        </PageSection>

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
              <YAxis label={{ value: '€', position: 'insideTopLeft' }} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
             <Area type="monotone" dataKey="Cash" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              <Area type="monotone" dataKey="Tournament" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </PageSection>

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

        <PieCharts 
          title="Most Successful Game Location" 
          data={data01} 
          dataKey="value" 
          nameKey="name" 
          fill="#82ca9d"
          cx="50%"
          cy="50%"
          outerRadius={90}
          width={730} 
          height={250}
        />

        <PieCharts 
          title="Most Played Game Location" 
          data={data01} 
          dataKey="value" 
          nameKey="name" 
          fill="#8884d8"
          cx="50%"
          cy="50%"
          outerRadius={90}
          width={730} 
          height={250}
        />

      </PageContainer>


      <Footer />
    </div>
  )

}



export default Home

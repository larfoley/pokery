import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import Button from "../../shared/Button"
import Table from "../../shared/Table"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'

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
          <Button>Find out More</Button>
        </PageSection>
        <PageSection>
          <SectionTitle title="Recent Sessions"/>
        </PageSection>
        <PageSection>
          <SectionTitle title="Nearby Games"/>
        </PageSection>

      </PageContainer>
      <Footer />
    </div>
  )

}



export default Home

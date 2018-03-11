import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import Button from "../../shared/ButtonLink"
import Table from "../../shared/Table"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
import LivePokerGames from "../../shared/LivePokerGames";

const Home = props => {
  return (
    <div>
      <Header />
      <Sidebar logout={props.logout.bind(this)}/>
      <PageContainer>
        <PageSection>
          <SectionTitle title="Lifetime Progress"/>
          <Table rows={[
            [ {data: "Earnings: ", type: "th"}, {data: "$2590", type: "td"} ],
            [ {data: "Win Rate: ", type: "th"}, {data: "27%", type: "td"} ],
            [ {data: "Most Scuccesfull Location", type: "th"}, {data: "Merrion", type: "td"} ],
            [ {data: "Most Scuccesfull Variation", type: "th"}, {data: "Texas Hold'em", type: "td"} ]
          ]}/>
          <Button to="/progress">Find out More</Button>
        </PageSection>
        <PageSection>
          <SectionTitle title="Recent Sessions"/>
        </PageSection>
        <PageSection>
          <SectionTitle title="Nearby Games"/>
          <LivePokerGames limit={5} />
          <Button to="find-a-game">Find More Games</Button>
        </PageSection>

      </PageContainer>
      <Footer />
    </div>
  )

}



export default Home

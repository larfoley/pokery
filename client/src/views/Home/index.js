import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import Button from "../../shared/ButtonLink"
import Table from "../../shared/Table"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
import LivePokerGames from "../../shared/LivePokerGames"
import ProgressOverview from '../../shared/ProgressOverview'

const Home = props => {
  return (
    <div>
      <Header />
      <Sidebar logout={props.logout.bind(this)}/>
      <PageContainer>
        <PageSection>
          <SectionTitle title="Progress"/>
          <ProgressOverview />
          <Button to="/progress">Find out More</Button>
        </PageSection>
        <PageSection>
          <SectionTitle title="Recent Sessions"/>
        </PageSection>
        <PageSection>
          <SectionTitle title="Nearby Games"/>
          <LivePokerGames limit={3} disableLoadMoreButton={true}/>
          <Button to="find-a-game">Find More Games</Button>
        </PageSection>

      </PageContainer>
      <Footer />
    </div>
  )

}



export default Home

import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import Button from "../../shared/ButtonLink"
import Header from '../../App/Header'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
<<<<<<< HEAD
import LivePokerGames from "../../shared/LivePokerGames";
import PokerSessions from "../../shared/PokerSessions"
=======
import LivePokerGames from "../../shared/LivePokerGames"
import ProgressOverview from '../../shared/ProgressOverview'
import RecentSessions from '../../shared/RecentSessions'
>>>>>>> 3bca346b65a403118f33d8170bf0ddffd68e1ede

const Home = props => {
  return (
    <div>
      
      <Header />
      <Sidebar logout={props.logout}/>
      <PageContainer>
        <PageSection>
          <SectionTitle title="Progress"/>
          <ProgressOverview sessions={props.sessions}/>
          <Button to="/progress">Find out More</Button>
        </PageSection>
        <PageSection>
          <SectionTitle title="Recent Sessions"/>
<<<<<<< HEAD
          <PokerSessions limit="3"/>
=======
          <RecentSessions sessions={props.sessions}/>
>>>>>>> 3bca346b65a403118f33d8170bf0ddffd68e1ede
        </PageSection>
        <PageSection>
          <SectionTitle title="Nearby Games"/>
          <LivePokerGames limit={3} disableLoadMoreButton={true}/>
          <Button to="find-a-game">Find More Games</Button>
        </PageSection>

      </PageContainer>
    </div>
  )

}



export default Home

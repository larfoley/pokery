import React from "react"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import PokerSessions from "../../shared/PokerSessions"

const SessionsHistoryPage = props => {
  return (
    <div>
      <Header />
      <Sidebar logout={props.logout}/>
      <PageContainer>
        <PageSection>
          <SectionTitle title="Sessions"/>
<<<<<<< HEAD
          <PokerSessions limit = "5"/>
=======
          <PokerSessions
            sessions={props.sessions}
            locations={props.locations}
            editPokerSession={props.editPokerSession}
            deletePokerSession={props.deletePokerSession}
          />
>>>>>>> 3bca346b65a403118f33d8170bf0ddffd68e1ede
        </PageSection>
      </PageContainer>
      <Footer />
    </div>
  )

}



export default SessionsHistoryPage

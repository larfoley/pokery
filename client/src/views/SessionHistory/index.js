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
      <Sidebar logout={props.logout.bind(this)}/>
      <PageContainer>
        <PageSection>
          <SectionTitle title="Sessions"/>
          <PokerSessions editPokerSession={props.editPokerSession}/>
        </PageSection>
      </PageContainer>
      <Footer />
    </div>
  )

}



export default SessionsHistoryPage

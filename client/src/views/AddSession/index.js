import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
import PokerSessionAdder from "../../shared/PokerSessionAdder"
import PokerLocationAdder from "../../shared/PokerLocationAdder"
import PokerLocations from "../../shared/PokerLocations"

const AddSession = props => {

    const pokerLocations = props.user.pokerLocations

    return (
      <div>
        <Header />
        <Sidebar logout={props.logout}/>
        <PageContainer>

          <PageSection>
            <SectionTitle title="Create a Session"/>
            {
            pokerLocations.length?
            <PokerSessionAdder
              pokerLocations={props.user.pokerLocations}
              addSession={props.addSession}
            /> :
            <p>Before creating a session you must add a location below so that we can track your most succesfull location.</p>
            }
          </PageSection>
          <PageSection>
            <SectionTitle title="Poker Locations"/>
            <PokerLocationAdder
              user={props.user}
              addPokerLocation={props.addPokerLocation}
            />
            <PokerLocations
              locations={props.user.pokerLocations}
              sessions={props.user.pokerSessions}
              editLivePokerLocation={props.editLivePokerLocation}
              deleteLivePokerLocation={props.deleteLivePokerLocation}
            />
          </PageSection>
        </PageContainer>
        <Footer />
      </div>
    )

}


export default AddSession


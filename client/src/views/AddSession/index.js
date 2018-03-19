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

class AddSession extends React.Component {
  constructor() {
    super()
    this.state = {
      locations: [{name: "foo"}],
      sessions: [{name: "foo"}]
    }
  }

  render() {
    const locations = this.state.locations

    return (
      <div>
        <Header />
        <Sidebar />
        <PageContainer>

          <PageSection>
            <SectionTitle title="Create a Session"/>
            {
            locations.length?
            <PokerSessionAdder
              pokerLocations={this.props.user.pokerLocations}
              addSession={this.props.addSession}
            /> :
            <p>Before creating a session you must add a location</p>
            }
          </PageSection>
          <PageSection>
            <SectionTitle title="Poker Locations"/>
            <PokerLocationAdder
              user={this.props.user}
              addPokerLocation={this.props.addPokerLocation}
            />
            <PokerLocations
              locations={this.props.user.pokerLocations}
              sessions={this.props.user.pokerSessions}
              editLivePokerLocation={this.props.editLivePokerLocation}
              deleteLivePokerLocation={this.props.deleteLivePokerLocation}
            />
          </PageSection>
        </PageContainer>
        <Footer />
      </div>
    )
  }
}


export default AddSession

import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import AddSessionForm from "../../shared/AddSessionForm"
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
        <PageSection>
          <SectionTitle title="Create a Session"/>
          {
            locations.length?
              <AddSessionForm
                user={this.props.user}
                addSession={this.props.addSession}
              /> :
              <p>Before creating a session you must add a location</p>

          }
        </PageSection>

        <PageSection>
          <SectionTitle title="Poker Locations"/>
          <PokerLocations user={this.props.user} addPokerLocation={this.props.addPokerLocation}/>
        </PageSection>
      </div>
    )
  }
}


export default AddSession

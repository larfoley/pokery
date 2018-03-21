import React from 'react'
import PokerLocation from "./PokerLocation/"

class PokerLocations extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const pokerLocations = this.props.locations;
    const sessions = this.props.sessions;

    return (
      <div>
        { pokerLocations.map(location => (
          <PokerLocation
            key={location._id}
            id={location._id}
            name={location.name}
            sessions={sessions.filter(s => s.location === location.name)}
            editLivePokerLocation={this.props.editLivePokerLocation}
            deleteLivePokerLocation={this.props.deleteLivePokerLocation}
          />
        )) }
      </div>
    )
  }

}

export default PokerLocations

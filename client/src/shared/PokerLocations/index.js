import React from 'react'
import PokerLocation from "./PokerLocation"

class PokerLocations extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pokerLocations: []
    }
  }

  componentWillMount() {
    this.setState({pokerLocations: this.props.locations})
  }

  render() {
    const pokerLocations = this.state.pokerLocations;

    return (
      <div>
        { pokerLocations.map((location, i) => (
          <PokerLocation key={i}>{location.name}</PokerLocation>
        )) }
      </div>
    )
  }

}

export default PokerLocations

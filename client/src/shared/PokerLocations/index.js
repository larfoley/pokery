import React from 'react'
import AddPokerLocationForm from "./AddPokerLocationForm/"
import PokerLocation from "./PokerLocation"

class PokerLocations extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pokerLocations: [

      ]
    }
  }

  render() {
    const pokerLocations = this.state.pokerLocations;

    return (
      <div>
        <AddPokerLocationForm />
        { pokerLocations.map((location, i) => (
          <PokerLocation key={i}>{location.name}</PokerLocation>
        )) }
      </div>
    )
  }

}

export default PokerLocations

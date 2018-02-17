import React, { Component } from "react"

// Components
import Box from "../Box"
import SectionTitle from "../SectionTitle"
import PageSection from "../PageSection"
import StyledBar from "./Bar"
import StyledTable from "./Table"

import axios from "axios"

class LivePokerGame extends Component {

  constructor(props){
    super(props);
    this.state = {
      livePokerGames: []
    }
  }

  componentDidMount(){
    axios.get('/api/live-poker-timetables')
    .then(response => {
      this.setState({livePokerGames: response.data});
      
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  render() {
  
    return (
      <div>
        <PageSection>
          <SectionTitle title="Find A Live Game"/>
        </PageSection>
        
        <PageSection>
          {this.state.livePokerGames.map((item, i) => (
            <Box key = {i}>
              <StyledBar>
                <h3>{item.type}</h3>
                <h4>{item.address}</h4>
              </StyledBar>
              <StyledTable>
                <table>
                  <tbody>
                    <tr>
                      <th>Buy In:</th>
                      <div className="details">
                        <td>{item.buyIn}</td>
                      </div>
                    </tr>
                    <tr>
                      <th>Date:</th>
                      <div className="details">
                        <td>{item.date}</td>
                      </div>
                    </tr>
                    <tr>
                      <th>Start Time:</th>
                      <div className="details">
                        <td>{item.time}</td>
                      </div>
                    </tr>
                  </tbody>
                </table>
              </StyledTable>
            </Box>
        ))}
        </PageSection>
        </div>
  )}

}
export default LivePokerGame

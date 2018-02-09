import React, { Component } from "react"
import Box from "../../shared/Box"
import Banner from "../../shared/Banner"
import PageSection from "../../shared/PageSection"
import axios from "axios"

class About extends Component {

  constructor(props){
  super(props);
  this.state = {
    livePokerGames: []
  };
 
 }
  componentDidMount(){
    axios.get('/api/live-poker-timetables')
    .then(response => {
      this.setState({livePokerGames: response.data});
      
    })
    .catch(function (error) {
      console.log(error);
    });



  }

  render() {
  
  return (
    <div>
    
        <PageSection>
          {this.state.livePokerGames.map((item, i) => (
            <Box key={i}>
              {item.date},
              {item.day},
              {item.prize}
            </Box>
          ))}
        </PageSection>
    </div>
  )
  }
}

export default About

import React, { Component } from "react"

// Component
import LivePokerGame from "../../shared/LivePokerGame"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'

class FindAGame extends Component {

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <PageContainer>

          <LivePokerGame />

        </PageContainer>
        <Footer />
      </div>
  )}

}
export default FindAGame

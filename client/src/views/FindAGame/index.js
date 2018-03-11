import React, { Component } from "react"

// Component
import LivePokerGames from "../../shared/LivePokerGames"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import ComboBox from "../../shared/ComboBox"

const FindAGame = (props) => (
  <div>
    <Header />
    <Sidebar />
    <PageContainer>
        <PageSection>
          <SectionTitle title="Find a Game"/>
          <ComboBox width="150px" name="day" options={[
            {value: "Today"},
            {value: "Monday"},
            {value: "Tuesday"},
            {value: "Wednesday"},
            {value: "Thursday"},
            {value: "Friday"}
          ]} />
          <LivePokerGames limit={50} />
        </PageSection>
    </PageContainer>
    <Footer />
  </div>
)
export default FindAGame

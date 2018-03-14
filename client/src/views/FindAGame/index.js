import React, { Component } from "react"

// Component
import LivePokerGames from "../../shared/LivePokerGames"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer' 
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"



const FindAGame = (props) => (

      <div>
        <Header />
        <Sidebar />
        
        <PageContainer>
            <PageSection>
              <SectionTitle title="Find a Game"/>
              
              <LivePokerGames limit={50} day='Monday'/>
            </PageSection>
        </PageContainer>
        <Footer />
      </div>
)
export default FindAGame

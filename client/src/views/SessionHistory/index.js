import React from "react"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"

const HomePage = props => {
  return (
    <div>
      <Header />
      <Sidebar />
      <PageContainer>
        <PageSection>
          <SectionTitle title="Recent Sessions"/>
        </PageSection>
        <h1> Session History </h1>
      </PageContainer>
      <Footer />
    </div>
  )

}



export default HomePage
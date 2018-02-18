import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'

const Home = props => {
  return (
    <div>
      <Header />
      <Sidebar />
      <PageContainer>

        <PageSection>
          <SectionTitle title="Recent Sessions"/>
        </PageSection>
        <PageSection>
          <SectionTitle title="Nearby Games"/>
        </PageSection>

      </PageContainer>
      <Footer />
    </div>
  )

}



export default Home

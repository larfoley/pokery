import React from "react"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"

import Preferences from '../../shared/Preferences'

const SettingsPage = props => {
  return (
    <div>
      <Header />
      <Sidebar />
      <PageContainer>
        <PageSection>
          <SectionTitle title="Preferences"/>
          <Preferences />
        </PageSection>

        <PageSection>
          <SectionTitle title="Change Password"/>
        </PageSection>

        <PageSection>
          <SectionTitle title="Change Email"/>
        </PageSection>

      </PageContainer>
      <Footer />
    </div>
  )

}



export default SettingsPage

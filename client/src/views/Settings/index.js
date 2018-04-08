import React from "react"
import Header from '../../App/Header'
import Footer from '../../App/Footer'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import ChangePassword from '../../shared/ChangePassword'
import Preferences from '../../shared/Preferences'
import ChangeEmail from '../../shared/ChangeEmail'

const SettingsPage = props => {
  return (
    <div>
      <Header />
      <Sidebar logout={props.logout.bind(this)}/>
      <PageContainer>
        <PageSection>
          <SectionTitle title="Preferences"/>
          <Preferences updateUserPreferences={props.updateUserPreferences.bind(this)}/>
        </PageSection>

        <PageSection>
          <SectionTitle title="Change Password"/>
		  <ChangePassword />
        </PageSection>

        <PageSection>
          <SectionTitle title="Change Email"/>
		  <ChangeEmail />
        </PageSection>

      </PageContainer>
      <Footer />
    </div>
  )

}



export default SettingsPage

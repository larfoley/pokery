import React from "react"
// import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import LoginForm from "../../shared/LoginForm"
import Header from '../../shared/SiteHeader'


const Landing = props => (
  <div>
    <Header />
    <PageSection>

      <LoginForm logIn={props.logIn}/>
    </PageSection>

  </div>
)

export default Landing

import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import LoginForm from "../../shared/LoginForm"
import Header from './Header.js'

const Landing = props => (
  <div>
    <Header />
    <PageSection>

      <LoginForm />
    </PageSection>

  </div>
)

export default Landing

import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import LoginForm from "../../shared/LoginForm"

const Home = props => (
  <div>

    <PageSection>
      <SectionTitle title="Landing Page"/>
      <LoginForm />
    </PageSection>

  </div>
)

export default Home

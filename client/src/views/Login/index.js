import React from "react"
import PageSection from "../../shared/PageSection"
import LoginForm from "../../shared/LoginForm/"
import Header from '../../views/Landing/Navbar'

const LoginPage = props => (
  <div>
    <Header />
    {/* <PageSection> */}
      <LoginForm logIn={props.logIn}/>
    {/* </PageSection> */}
  </div>
)


export default LoginPage

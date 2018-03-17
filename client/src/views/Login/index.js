import React from "react"
import LoginForm from "../../shared/LoginForm/"
import Header from '../../views/Landing/Navbar'

const LoginPage = props => (
  <div>
    <Header />
    <LoginForm logIn={props.logIn}/>
  </div>
)


export default LoginPage

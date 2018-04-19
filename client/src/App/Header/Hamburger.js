import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const StyledIcon = styled(FontAwesome)`
  @media screen and (min-width: 700px) {
    display: none;
  }
`;


class Hamburger extends React.Component {

  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  handleClick = () => {
    var burger = document.getElementById('hamburger')

    document.getElementById('app-sidebar').classList.toggle('isOpen');

    if (this.state.isOpen) {
      burger.classList.remove('fa-bars')
      burger.classList.add('fa-times')
    } else {
      burger.classList.remove('fa-times')
      burger.classList.add('fa-bars')
    }

    this.setState({isOpen: !this.state.isOpen})

  }

  render() {
    return (
      this.state.isOpen?
        <StyledIcon id="hamburger" name="times" onClick={this.handleClick.bind(this)}/> :
        <StyledIcon id="hamburger" name="bars" onClick={this.handleClick.bind(this)}/>
    )
  }

}

export default Hamburger

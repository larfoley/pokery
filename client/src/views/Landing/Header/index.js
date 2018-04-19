import React from 'react'
import styled from 'styled-components'
import ButtonLink from '../../../shared/ButtonLink'
import Navbar from '../Navbar'
import Container from '../Container'
import Section from '../Section'

const Wrapper = styled.div`
  background-color:  #4c505d;
  ${'' /* color: white; */}
  text-align: center;
  ${'' /* padding: 4em 0; */}

  @media screen and (min-width: 700px) {
    ${'' /* padding: 6em 0; */}
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 2.5em;
  color: white;

  &::after {
    content: " ";
    display: block;
    width: 50px;
    height: 10px;
    margin: auto;
    background-color: #26ebb4;
    margin-bottom: 17px;
  }

`

const Tagline = styled.p`
  margin-top: 0;
  color: white;
  font-size: 1.2em;
`


const Header = props => (
  <Wrapper>
    <Navbar />
    <Container>
      <div className="grid">
       <div className="grid__col grid__col--2-of-4 grid__col--centered">
         <Section>
           <Title>Pokery</Title>
           <Tagline> Sign up to Pokery to find a poker game near you and to enhance your poker playing skills. </Tagline>
           <ButtonLink to="/register" pill="true" width="140px">Sign Up</ButtonLink>
         </Section>
       </div>
     </div>
    </Container>
  </Wrapper>
)

export default Header

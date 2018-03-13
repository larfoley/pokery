import React from 'react'
import styled from 'styled-components'
import Button from '../../../shared/Button'
import FontAwesome from 'react-fontawesome'
import PageSection from '../../../shared/PageSection'
import Float from '../../../shared/Float'
import LoginForm from '../../../shared/LoginForm'
import Navbar from '../Navbar'
import Section from '../Section'
import Container from '../Container'
import Feature from './Feature'

const Features = props => (
  <Container>
    <Section>
      <div className="grid">
        <div className="grid__col grid__col--2-of-6">
          <Feature
            icon="line-chart"
            title="Track Your Progress"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore qui ratione ducimus eius maxime obcaecati totam culpa voluptatibus odit! Esse veniam soluta atque tenetur animi tempora! Rem mollitia ipsam doloremque?"/>
        </div>
        <div className="grid__col grid__col--2-of-6">
          <Feature
            icon="search"
            title="Find Live Poker"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore qui ratione ducimus eius maxime obcaecati totam culpa voluptatibus odit! Esse veniam soluta atque tenetur animi tempora! Rem mollitia ipsam doloremque?"/>
        </div>
        <div className="grid__col grid__col--2-of-6">
          <Feature
            icon="plus"
            title="Statistics"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore qui ratione ducimus eius maxime obcaecati totam culpa voluptatibus odit! Esse veniam soluta atque tenetur animi tempora! Rem mollitia ipsam doloremque?"/>
        </div>
      </div>
    </Section>
  </Container>
)

export default Features

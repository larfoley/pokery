import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Feature from './Feature'

const Features = props => (
  <div>
    <Section bgColor="white">
      <Container>
        <div className="grid">
          <div className="grid__col grid__col--2-of-6">
            <Feature
              icon="line-chart"
              title="Track Your Progress"
              description="A core feature Pokery has for users to utilise, is to track your progress over time. This feature is for any poker player who has a desire or willingness to  enhance their playing skills and odds in the near future"/>
            </div>
            <div className="grid__col grid__col--2-of-6">
              <Feature
                icon="search"
                title="Find Live Poker"
                description="A massive tool for poker players is to find a nearby poker game or tournament, whether its a pub, poker establishment or another Pokery users property a player can find what is nearby to further improve their skills"/>
              </div>
              <div className="grid__col grid__col--2-of-6">
                <Feature
                  icon="plus"
                  title="Personalized Statistics"
                  description="An immense feature found while using Pokery is the personalized statistics and graphs we will give to the user. The idea is to help all Pokery users learn what they are best at and how they can improve in the future"/>
                </div>
              </div>
      </Container>
    </Section>
    <Section bgColor="#f5f5f5" >
      <Container>
        <div className="grid">
          <div className="grid__col grid__col--2-of-4">
            <h1>Available on All platforms</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum voluptatem adipisci, voluptatum sit! Veniam, cupiditate omnis numquam nam nobis possimus in eum blanditiis, tempore voluptatem. Quos magni obcaecati quisquam inventore.</p>
          </div>
          <div className="grid__col grid__col--2-of-4">
            {/* <img
              width="350"
              src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/en/mkt/pdp/phones/nexus6p/img/nexus-os-phone-1.png" alt="phone"/> */}
          </div>
        </div>
      </Container>
    </Section>
  </div>
)

export default Features

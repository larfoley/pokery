import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import Header from '../../App/Header'
import Sidebar from '../../App/Sidebar'
import PageContainer from '../../App/PageContainer'

// Charts
import EarningsChart from './EarningsChart'
import BestGameTypeChart from './BestGameTypeChart'
import BestLocationsChart from './BestLocationsChart';
import MostPlayedLocationChart from './MostPlayedLocationChart';

const Progress = props => (
  <div>
    <Header />
    <Sidebar />
    <PageContainer>
      <PageSection>
        <SectionTitle title="Earnings"/>
        <EarningsChart sessions={props.sessions} />
      </PageSection>
      <PageSection title="">
        <SectionTitle title="Most Successfull Game"/>
        <BestGameTypeChart sessions={props.sessions} />
      </PageSection>
      <PageSection title="">
        <SectionTitle title="Most Successfull Location"/>
        <BestLocationsChart sessions={props.sessions}/>
      </PageSection>
      <PageSection title="">
        <SectionTitle title="Most Played Location"/>
        <MostPlayedLocationChart sessions={props.sessions}/>
      </PageSection>
    </PageContainer>
  </div>
)


export default Progress

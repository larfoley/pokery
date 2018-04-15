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
import LifetimeEarningsChart from './LifetimeEarningsChart'
import Select from '../../shared/Select'

class Progress extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sessions: props.sessions,
      filter: "lifetime",
      filteredSessions: props.sessions
    }
    this.onFilterSession = this.onFilterSession.bind(this)
  }

  onFilterSession(event) {
    const value = event.target.value
    const currentDate = new Date()
    let sessionsThisYear
    let sessionsThisMonth

    if (value !== this.state.filter) {

      sessionsThisYear = this.state.sessions.filter(session => (
        new Date(session.date).getYear() === currentDate.getYear()
      ))

      sessionsThisMonth = sessionsThisYear.filter(session => (
        new Date(session.date).getMonth() === currentDate.getMonth()
      ))

      this.setState(prevState => {
        if (value === "thisyear") {
          prevState.filteredSessions = sessionsThisYear

        } else if (value === "thismonth") {
          prevState.filteredSessions = sessionsThisMonth

        } else {
          prevState.filteredSessions = this.state.sessions

        }
        console.log(prevState.filteredSessions);
        return prevState
      })

    }
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar logout={this.props.logout}/>
        <PageContainer>
          <PageSection>
            <SectionTitle title="Progress"/>
            <Select
              label="Filter Progress"
              options={['Liftetime', 'thismonth', 'thisyear']}
              onChange={this.onFilterSession}
            />
          </PageSection>
          <PageSection>
            <SectionTitle title="Earnings"/>
            <EarningsChart sessions={this.state.filteredSessions} />
          </PageSection>

          <PageSection>
            <SectionTitle title="Cash Games vs Tournaments"/>
            <LifetimeEarningsChart sessions={this.state.filteredSessions} />
          </PageSection>

          <PageSection title="">
            <SectionTitle title="Most Successfull Game"/>
            <BestGameTypeChart sessions={this.state.filteredSessions} />
          </PageSection>

          <PageSection title="">
            <SectionTitle title="Most Successfull Location"/>
            <BestLocationsChart sessions={this.state.filteredSessions}/>
          </PageSection>

          <PageSection title="">
            <SectionTitle title="Most Played Location"/>
            <MostPlayedLocationChart sessions={this.state.filteredSessions}/>
          </PageSection>

        </PageContainer>
      </div>
    )
  }

}


export default Progress

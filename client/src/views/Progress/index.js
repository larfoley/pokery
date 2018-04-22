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
import MostSuccesfullGame from './MostSuccesfullGame'
import Select from '../../shared/Select'

class Progress extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sessions: props.sessions,
      filter: "Life Time",
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
        if (value === "This Year") {
          prevState.filteredSessions = sessionsThisYear

        } else if (value === "This Month") {
          prevState.filteredSessions = sessionsThisMonth

        } else {
          prevState.filteredSessions = this.state.sessions

        }
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
              options={['Life Time', 'This Month', 'This Year']}
              onChange={this.onFilterSession}
            />
          </PageSection>
          <PageSection>
            <SectionTitle title="Earnings"/>
            <EarningsChart sessions={this.state.filteredSessions} />
          </PageSection>

          <PageSection>
            <SectionTitle title="Most Succesful Game"/>
            <MostSuccesfullGame sessions={this.state.filteredSessions} locations={this.props.locations} />
          </PageSection>

          <PageSection>
            <SectionTitle title="Cash Games vs Tournaments"/>
            <BestGameTypeChart sessions={this.state.filteredSessions} />
          </PageSection>

          <PageSection title="">
            <SectionTitle title="Most Successful Location"/>
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

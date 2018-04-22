import React from 'react'
import Table from '../../LivePokerGames/LivePokerGame/Table'
import TableBox from '../../LivePokerGames/LivePokerGame/TableBox'
import Wrapper from '../../LivePokerGames/LivePokerGame/Wrapper'
import Header from '../../LivePokerGames/LivePokerGame/Header'
import Button from '../../Button'
import Input from '../../Input'
import Select from '../../Select'
import { NotificationManager } from 'react-notifications'


class PokerSession extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editMode: false,
      date: props.date,
      buyIn: props.buyIn,
      amountWon: props.amountWon,
      variation: props.variation,
      location: props.location,
      gameType: props.gameType
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onSaveEdit = this.onSaveEdit.bind(this)
    this.toggleEditMode = this.toggleEditMode.bind(this)

  }

  onInputChange(event) {
    const session = this.state;
    session[event.target.name] = event.target.value;
    console.log(session);
    this.setState(session);
  }

  onSaveEdit() {
    const update = {
      date: this.state.date,
      buyIn: parseInt(this.state.buyIn, 10),
      amountWon: parseInt(this.state.amountWon, 10),
      variation: this.state.variation,
      location: this.state.location,
      gameType: this.state.gameType,
    }

    this.props.editPokerSession(this.props.id, update, (err, res) => {
     if(!err) {
       NotificationManager.success('Poker Session Updated!')
       console.log("Response", res);
       this.toggleEditMode()
     } else {
      NotificationManager.error('There was an error')
       console.error(err)
     }
    })

  }


  onDeleteSession() {
    this.props.deletePokerSession(this.props.id, (err) => {
      if (err) {
       NotificationManager.error('There was an error deleting session')        
        console.error(err);
      } else {
       NotificationManager.success("Session deleted")
      }
    })
  }

  toggleEditMode() {
    this.setState(prevState => {
      prevState.editMode = !prevState.editMode
      return prevState
    })
  }

  render() {
    return(
      <Wrapper>
        <Header>
          <h3>
            {`${this.props.variation} ${this.props.gameType}`}
          </h3>
        </Header>
      <TableBox>
        <Table>
          {
            this.state.editMode ?

              <form>
                <table>
                  <tbody>
                    <tr>
                      <th>Date:</th>
                      <td>
                        <Input
                          name="date"
                          value={this.state.date}
                          type="date"
                          onChange={this.onInputChange}
                          placeholder={this.state.buyIn}
                          required="true"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Buy in:</th>
                      <td>
                       <Input
                         type="number"
                         name="buyIn"
                         value={this.state.buyIn}
                         placeholder={this.state.buyIn}
                         onChange={this.onInputChange}
                         required="true"
                       />
                      </td>
                    </tr>
                    <tr>
                      <th>Amount won:</th>
                      <td>
                       <Input
                         type="number"
                         name="amountWon"
                         value={this.state.amountWon}
                         onChange={this.onInputChange}
                         required="true"
                       />
                      </td>
                    </tr>
                    <tr>
                      <th>Location</th>
                      <td>
                        <Select
                          type="number"
                          name="location"
                          value={this.state.location}
                          onChange={this.onInputChange}
                          required="true"
                          options={this.props.locations}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Game Type</th>
                      <td>
                        <Select
                          type="number"
                          name="gameType"
                          value={this.state.gameType}
                          onChange={this.onInputChange}
                          required="true"
                          options={["Tournament (Re-Buy)", "Freezeout", "Cash Game"]}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Game Variation</th>
                      <td>
                        <Select
                          type="number"
                          name="variation"
                          value={this.state.variation}
                          onChange={this.onInputChange}
                          required="true"
                          options={["Texas Hold'em", "Omaha"]}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>

                :

              <table>
                <tbody>
                  <tr>
                    <th>Date:</th>
                      <td>
                        {this.props.date}
                      </td>
                  </tr>
                  <tr>
                    <th>Buy in:</th>
                    <td>{this.props.buyIn} &euro;</td>
                  </tr>
                  <tr>
                    <th>Winnings(including buy in):</th>
                    <td>{this.props.amountWon} &euro;</td>
                  </tr>
                  <tr>
                    <th>Location</th>
                    <td>{this.props.location}</td>
                  </tr>
                  <tr>
                    <th>Game Type</th>
                    <td>{this.props.gameType}</td>
                  </tr>
                  <tr>
                    <th>Game Variation</th>
                    <td>{this.props.variation}</td>
                  </tr>
                </tbody>
              </table>
          }

        </Table>
        <br/>
        {!this.state.editMode?
        <div>
          <Button
            bgColor="#d62c1a"
            onClick={this.toggleEditMode.bind(this)}>
            Edit
          </Button>
          <Button
            bgColor="#3498db"
            onClick={this.onDeleteSession.bind(this)}>
            Delete
          </Button>
        </div>
            :
        <div>
          <Button onClick={this.onSaveEdit}>Save</Button>
          <Button bgColor="#d62c1a" onClick={this.toggleEditMode}>Cancel</Button>
        </div>
        }
      </TableBox>
      </Wrapper>
    )
  }
}

export default PokerSession

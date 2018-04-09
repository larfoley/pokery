import React from 'react'
import Box from '../../Box'
import Table from '../../LivePokerGames/LivePokerGame/Table'
import TableBox from '../../LivePokerGames/LivePokerGame/TableBox'
import Wrapper from '../../LivePokerGames/LivePokerGame/Wrapper'
import Header from '../../LivePokerGames/LivePokerGame/Header'
import Button from '../../Button'
import Input from '../../Input'
class PokerSession extends React.Component {
  constructor(props){
    super(props)
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveEdit = this.onSaveEdit.bind(this);
    this.state = {
      editMode: false,
      date: this.props.date,
      buyIn: this.props.buyIn,
      amountWon: this.props.amountWon,
      newDate: this.props.date,
      newBuyIn: this.props.buyIn,
      newAmountWon: this.props.amountWon,
      id: this.props._id,
      
    }
  }

  onInputChange(event) {
    this.setState({newDate: event.target.value})
    this.setState({newBuyIn: event.target.value})
    this.setState({newAmountWon: event.target.value})
  }
  
  onSaveEdit() {
    var newBuyIn = this.state.value;
    var validationErrors = [];

    if(newBuyIn !== this.state.buyIn) {   
      this.props.editPokerSession(this.state.id, newBuyIn, (err, session) => {
       if(!err) {
         this.setState({editMode: false})
         window.alert("Poker Session Updated!")
       } else {
         window.alert("There was an error")
         console.log(err);
       }
      })
    }
  }

  toggleEditMode() {
    this.setState(prevState => {
      prevState.editMode = !prevState.editMode
      return prevState
    })
  }
  render(){
    return(
      <Wrapper>
        <Header>
          <h3>
            {`${this.props.variation} ${this.props.gameType}`}
          </h3>
        </Header>
      <TableBox>
        <Table>    
          <table>
            <tbody>
              <tr>
                <th>Date:</th>
                  <td>{this.state.editMode?
                    <Input
                    onChange={this.onInputChange}
                    autoFocus
                    value={this.state.newDate} />
                    :this.props.date}
                  </td>
              </tr>
              <tr>
                <th>Buy in:</th>
                <td>{this.state.editMode?
                 <Input 
                  onChange={this.onInputChange}
                  autoFocus
                  value={this.state.newBuyIn} />
                  :this.props.buyIn}</td>
              </tr>
              <tr>
                <th>Amount won:</th>
                <td>{this.state.editMode?
                 <Input
                  onChange={this.onInputChange}
                  autoFocus
                  value={this.state.newAmountWon} />
                  :this.props.amountWon}</td>
              </tr>
              <tr>
                <th>Notes:</th>
                <td> </td>
              </tr>
            </tbody>
          </table>
        
        </Table>
        <br/>
        {!this.state.editMode?
        <div>
            <Button onClick={this.toggleEditMode.bind(this)}>Edit</Button>
            <Button bgColor="crimson">Delete</Button>
        </div>
            :<Button onClick={this.onSaveEdit}>Save</Button>
        }
      </TableBox>
      </Wrapper>
    )
  }
}

export default PokerSession

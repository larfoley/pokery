import React from 'react'
import Box from '../../Box'
import Table from '../../LivePokerGames/LivePokerGame/Table'
import TableBox from '../../LivePokerGames/LivePokerGame/TableBox'
import Wrapper from '../../LivePokerGames/LivePokerGame/Wrapper'
import Header from '../../LivePokerGames/LivePokerGame/Header'
import Button from '../../Button'

class PokerSession extends React.Component {
  constructor(props){
    super(props)
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
                <td>{this.props.date}</td>
              </tr>
              <tr>
                <th>Buy in:</th>
                <td>{this.props.buyIn}</td>
              </tr>
              <tr>
                <th>Amount won:</th>
                <td>{this.props.amountWon}</td>
              </tr>
              <tr>
                <th>Notes:</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Table>
        <br/>
        <Button onClick={() => {console.log(this.props)}}>Edit</Button>
        <Button bgColor="crimson">Delete</Button>
      </TableBox>
      </Wrapper>
    )
  }
}

export default PokerSession

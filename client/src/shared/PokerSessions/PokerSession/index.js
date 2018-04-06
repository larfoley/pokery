import React from 'react'
import Box from '../../Box'
import Table from '../../LivePokerGames/LivePokerGame/Table'
import TableBox from '../../LivePokerGames/LivePokerGame/TableBox'
import Wrapper from '../../LivePokerGames/LivePokerGame/Wrapper'
import Header from '../../LivePokerGames/LivePokerGame/Header'
const PokerSession = props => (
 <Wrapper>
   <Header>
     <h3>{props.variation}</h3>
     <h4>{props.location}</h4>
   </Header>
   <TableBox>
    <Table>
      <table>
        <tbody>
         <tr>
          <th>Game type:</th>
          <td>{props.gameType}</td>
         </tr>
         <tr>
          <th>Buy in:</th>
          <td>{props.buyIn}</td>
         </tr>
         <tr>
          <th>Amount won:</th>
          <td>{props.amountWon}</td>
         </tr>
         <tr>
          <th>Position:</th>
          <td>Hi</td>
         </tr>
         <tr>
          <th>Note:</th>
          <td>Hi</td>
         </tr>
        </tbody>
      </table>
    </Table>
   </TableBox>
  </Wrapper>
)

export default PokerSession

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
     <h4>Location</h4>
   </Header>
   {/* <Box>
     Earnings: {props.session.earnings}
   </Box> */}
   <TableBox>
    <Table>
      <table>
        <tbody>
         <tr>
          <th>Earnings:</th>
          <td>Hi</td>
         </tr>
         <tr>
          <th>Date:</th>
          <td>Hi</td>
         </tr>
         <tr>
          <th>Total player:</th>
          <td>Hi</td>
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

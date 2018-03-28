import React from 'react'
import Box from '../../Box'
import Table from '../../LivePokerGames/LivePokerGame/Table'
import TableBox from '../../LivePokerGames/LivePokerGame/TableBox'
import Wrapper from '../../LivePokerGames/LivePokerGame/Wrapper'
import Header from '../../LivePokerGames/LivePokerGame/Header'
const PokerSesion = props => (
 <Wrapper>
   <Header>
     <h3>Hi</h3>
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
          <td>{props.session.earnings}</td>
         </tr>
        </tbody>
      </table>
    </Table>
   </TableBox>
  </Wrapper>
)

export default PokerSesion

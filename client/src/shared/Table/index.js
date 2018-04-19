import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
const Table = styled.table`
  text-align: left;
  margin-bottom: 1em;

  th, td {
    padding: 8px 5px 8px 0;
    width: 50%;
  }
`

const StyledIcon = styled(FontAwesome)`
  color: #55efc4;
  font-size: 19px;
  margin-left: 5px;
`

const Caret = props => (
  <StyledIcon name="caret-up"/>
)

export default props => (
  <Table>
    <tbody>
      {props.rows.map((row, i) => (
        <tr key={i}>
          {row.map(cell => (
            cell.type === "th"?
              <th key={i + "a"}>{cell.data} </th> :
              <td key={i + "b"}>{cell.data} <Caret /></td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
)

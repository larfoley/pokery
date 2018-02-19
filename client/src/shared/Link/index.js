import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: inline-block;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  margin-right: 7px;
  text-align: center;
  color: ${props => props.color? props.color : null }
`

export default StyledLink

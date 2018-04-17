import styled from 'styled-components'

const Message = styled.p`
  background-color: ${props => props.type === "error"? "#e74c3c" : "#2ecc71"};
  padding: 1em;
  text-align: center;
  margin: 1em 0 2em 0;
  color: white;
  border-radius: 5px;
`

export default Message

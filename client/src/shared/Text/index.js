import styled from 'styled-components'

const Text = styled.p`
  text-align: ${props => props.align};
  color: ${props => props.color? props.color : null };
  margin: ${props => props.margin? props.margin : null};
  font-size: ${props => props.size? props.size : null};
`

export default Text;


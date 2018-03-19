import styled from 'styled-components'

const Align = styled.div`
  text-align: ${props => props.to === "left"? "left" : null};
  text-align: ${props => props.to === "right"? "right" : null};
  text-align: ${props => props.to === "center"? "center" : null};
`

export default Align

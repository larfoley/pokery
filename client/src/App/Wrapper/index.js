import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  overflow: auto;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.bg_color}
`

export default Wrapper

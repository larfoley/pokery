import styled from 'styled-components'

const Float = styled.div`
  float: ${
    props => {
      if (props.to === "left") {
        return "left"
      } else if (props.to === "right") {
        return "right"
      }
      return null;
    }
  }
`

export default Float

import styled from "styled-components"

const Section = styled.div`
  padding: 4em 0;
  background-color: ${props => props.bgColor? props.bgColor : null};
  color: ${props => props.color? props.color + " !important" : null};

  @media screen and (min-width: 700px) {
    padding: 6em 0;
  }

  p {
    color: ${props => props.color? props.color + " !important" : null};
  }
`

export default Section

import styled from "styled-components"

const Wrapper = styled.div`
  background-color: black;
  text-align: right;
  padding: 1em;

  @media screen and (min-width: 700px) {
    text-align: right;
  }

  a {
    ${'' /* display: block;
    margin: 5px 0; */}
    @media screen and (min-width: 700px) {
      display: inline-block;
    }
  }


`
export default Wrapper

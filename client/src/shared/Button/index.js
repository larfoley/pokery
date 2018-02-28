import styled from 'styled-components'

const Button = styled.button`
  padding: .6em 1.1em;
  display: inline-block;
  background-color: #55efc4;
  border-radius: 5px;
  border: none;
  outline: none;
  border-bottom: 3px solid darkgreen;
  color: white;
  text-decoration: none;
  text-align: center;
  width: ${props => props.fullWidth? '100%' : null};

  &:hover {
    cursor: pointer;
  }
`

export default Button

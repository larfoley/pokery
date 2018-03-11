import { css } from 'styled-components'
import vars from './variables'

export default css`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 18px;
    line-height: 1.2;
    font-family:  'Nunito', sans-serif;
    background-color: #f5f5f5;
  }

  img {
    vertical-align: bottom;
    max-width: 100%;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  p,
  input,
  textarea,
  button
  option,
  select {
    color: ${vars.text_color}
  }
`

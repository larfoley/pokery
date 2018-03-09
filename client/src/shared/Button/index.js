import styled from 'styled-components'
import css from '../../styles/variables.js'
import { darken, lighten } from 'polished'

const Button = styled.button`
  font-size: 16px;
  padding: .6em 1.1em;
  margin-right: 7px;
  background-color: ${css.primary_color};
  color: white;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  border: none;
  outline: none;
  border-bottom: 3px solid ${darken(0.2, css.primary_color)};
  border-radius: 5px;
  font-weight: bold;
  transition: .3s;

  ${
    props => {
      if (props.pill) {
        return `border-radius: 50px;`
      }
    }
  }

  ${
    props => {
      if (props.flat) {
        return `border: none;`
      }
    }
  }

  ${
    props => {
      if (props.transparent) {
        return `
          background-color: transparent;
          color: black;
          border: 1px solid;
          `
      }
    }
  }

  ${
    props => props.fullWidth? (
      `width: 100%; padding-top: .8em; padding-bottom: .8em;`
      ) : null
  }

  width: ${props => props.fullWidth? '100%' : null};

  &:hover {
    cursor: pointer;
    background-color: ${darken(0.1, css.primary_color)};
  }
`

export default Button

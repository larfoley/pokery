import React from 'react'
import styled from 'styled-components'

const styledH2 = styled.h2`
    margin: 0;
    text-align: center;
    color: white;
`;

const Title = props => (
    <styledH2>{props.name}</styledH2>
)

export default Title
  
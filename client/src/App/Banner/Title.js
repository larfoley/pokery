import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    margin: 0;
    color: white;
    text-align: center;
`;
export default props => (
    <Title>{props.children}</Title>
  )
  
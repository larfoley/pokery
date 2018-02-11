import React from 'react';
import styled from 'styled-components'

const StyledInput = styled.input`
   border: 1px solid #eee;
   padding: .5em;
   margin-bottom: 1em;
   display: block;
   width: 100%;
`;

export default props => (
  <StyledInput
    type={props.type}
    value={props.value}
    onChange={props.onChange}
  />
)

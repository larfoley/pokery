import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
   border: 1px solid #eee;
   padding: 1em;
   margin-bottom: 1em;
`;

export default props => <Box>{props.children}</Box>

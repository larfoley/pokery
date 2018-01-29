import React from 'react';
import styled from 'styled-components'

const Box = styled.section`
   border: 2px;
   height: 100px;
   padding: 4em;
   
`;
export default props => {
    return(
    <Box>{props.children}</Box>
    );
}
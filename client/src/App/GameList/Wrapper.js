import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
    height: 100%;
    width: 75%;
    position: absolute;
    right: 0;
    
`;
export default props => {
    return(
    <Wrapper>{props.children}</Wrapper>
    );
}
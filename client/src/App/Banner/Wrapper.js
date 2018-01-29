import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
    background-color: black;
    padding: 2em;
    width: 75%;
    position: absolute;
    right: 0;
`;
export default props => {
    return(
    <Wrapper>{props.children}</Wrapper>
    );
}
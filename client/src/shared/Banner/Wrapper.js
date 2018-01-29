import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.section`
    background-color: black;
    padding: 2em;
    color: white;
    margin-bottom: 2em;
`;
export default props => {
    return(
    <Wrapper>{props.children}</Wrapper>
    );
}
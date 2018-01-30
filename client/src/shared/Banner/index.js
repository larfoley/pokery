import React from 'react';
import styled from 'styled-components'

const Banner = styled.div`
    background-color: black;
    padding: 2em;
    color: white;
    margin-bottom: 2em;
`;

export default props => <Banner>{props.children}</Banner>

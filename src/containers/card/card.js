import React from 'react';
import { Box } from 'rebass';
import { lightGray } from 'constants/theme';
import styled from 'styled-components';

const Container = styled(Box).attrs({
    p: [10, 20],
    mb: [40, 50]
})`
    height: auto;
    border-radius: 7px;
    border: ${lightGray} solid 1px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.25s;
    &:first-of-type {
        margin-top: 0;
    }
`;

const Card = (props) => (
    <Container>
        {props.children}
    </Container>
);

export default Card;
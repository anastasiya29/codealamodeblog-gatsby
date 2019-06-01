import React from 'react';
import { Box } from 'rebass';
import { lightGray } from 'constants/theme';
import styled from 'styled-components';

const Container = styled(Box).attrs({
    p: [10, 20],
    my: [20, 30]
})`
    height: auto;
    border-radius: 4px;
    border: ${lightGray} solid 1px;
    box-shadow: 0 5px 10px ${lightGray};
    transition: all 0.25s;
    line-height: 22px;

    &:hover {
      top: -10px;
      box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }
`;

const Card = (props) => (
    <Container>
        {props.children}
    </Container>
);

export default Card;
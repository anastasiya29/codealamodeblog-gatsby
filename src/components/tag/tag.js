import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Emoji from 'components/emoji';
import { accentTeal } from 'constants/theme';

const Container = styled.span`
    background: ${accentTeal};
    color: white;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    line-height: 1.5;
    padding: 0.3em 0.5em;
    border-radius: .3em;
    margin-right: 15px;
`;

const Tag = ({ tag }) => (
    <div>
        <Emoji label="pin" symbol="📌" />
        <Container>{tag}</Container>
    </div>
);

Tag.PropTypes = {
    tag: PropTypes.string.isRequired
};

export default Tag;
import styled from 'styled-components';

const Highlight = styled('span').attrs({
    className: 'highlight'
})`
    background: ${props => props.backgroundColor};
    ${({ hoverBackgroundColor }) => hoverBackgroundColor && `
        &:hover { background: ${hoverBackgroundColor}; }
    `}
    color: white;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    line-height: 1.5;
    padding: 0.3em 0.5em;
    border-radius: .3em;
`;

export default Highlight;
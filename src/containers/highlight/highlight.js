import styled from 'styled-components';
import { accentPink, accentTeal } from 'constants/theme';

const Highlight = styled('span').attrs({
  className: 'highlight'
})`
    background: ${accentTeal};
    i {
      border: 1px solid ${accentTeal};
    }
    &:hover {
      background: ${accentPink};
      i {
        border: 1px solid ${accentPink};
      }
    }
    color: white;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    line-height: 1.5;
    padding: 0.3em 0.5em;
    border-radius: .3em;
    white-space: nowrap;
`;

export default Highlight;
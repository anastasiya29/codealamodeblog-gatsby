import styled from 'styled-components';
import { gray, accentTeal } from 'constants/theme';

const TableOfContents = styled.div`
  a {
    color: ${gray};
    &:hover {
      color: ${accentTeal};
    }
  }
  & > ul {
    padding-left: 0;
    list-style: none;
    ul {
      padding-left: 2em;
    }
    & > li {
      margin-bottom: 1em;
    }
  }
  ul > li > p {
    margin-bottom: 0;
  }
`;

export default TableOfContents;

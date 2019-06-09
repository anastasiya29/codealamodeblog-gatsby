import styled from 'styled-components';
import { softTeal } from 'constants/theme';

const PostBody = styled.div`
  ul { margin-left: 20px; }
  p ( margin: 1.6em 0; )
  margin-bottom: 10vh;
  h2, h3, h4 {
    &::before {
      content: "✨";
    }
  }
  blockquote {
    background: ${softTeal};
    padding: 1em 2em;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default PostBody;
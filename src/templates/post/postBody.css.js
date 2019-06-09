import styled from 'styled-components';
import { lightTeal } from 'constants/theme';

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
    background: ${lightTeal};
    padding: 1em 2em;
  }
`;

export default PostBody;
import styled from 'styled-components';
import { softTeal } from 'constants/theme';
import Card from 'containers/card';

const PostCard = styled(Card)`
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

export default PostCard;
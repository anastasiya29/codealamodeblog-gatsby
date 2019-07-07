import styled from 'styled-components';
import { softTeal } from 'constants/theme';
import Card from 'containers/card';
import MEDIA from 'helpers/mediaTemplates';

const PostCard = styled(Card)`
  ul {
    margin-left: 20px;
  }
  p {
    margin: 1.6em 0;
  }
  h2,
  h3,
  h4 {
    &::before {
      content: '✨';
    }
  }
  blockquote {
    background: ${softTeal};
    padding: 1em 2em;
    margin: 1em;
  }
  a:hover {
    text-decoration: underline;
  }
  ${MEDIA.PHONE`
    border: none;
    box-shadow: none;
    padding: 0 20px;
  `};
`;

export default PostCard;

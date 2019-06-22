import styled from 'styled-components';
import { gray } from 'constants/theme';

const PostColumn = styled.div`
  display: grid;
  grid-template-columns: unset;
  grid-column-gap: 10px;
  grid-template-columns: 25% 25% 25% 25%;
  .post-date,
  .post-tags {
    color: ${gray};
  }
  .post-date {
    grid-column: 1 / 2;
  }
  .post-tags {
    grid-column: 2 / 5;
    justify-self: end;
    span {
      margin-left: 20px;
    }
  }
  .post-body {
    grid-column: 1 / 5;
  }
  .left {
    grid-column: 1 / 3;
  }
  .right {
    grid-column: 3 / 5;
    justify-self: end;
    text-align: right;
  }
`;

export default PostColumn;

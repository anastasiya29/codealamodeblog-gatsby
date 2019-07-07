import styled from 'styled-components';
import { gray } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';
import { WideColumn } from 'containers/responsiveColumns';

const PostColumn = styled(WideColumn)`
  .post-date,
  .post-tags {
    color: ${gray};
  }
  .post-tags span {
    margin-left: 20px;
    &:first-of-type {
      margin-left: 0;
    }
  }
  ${MEDIA.MIN_TABLET`
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 25% 25% 25% 25%;

    .post-date {
      grid-column: 1 / 2;
    }
    .post-tags {
      grid-column: 2 / 5;
      justify-self: end;
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
  `};
  ${MEDIA.PHONE`
    .left {
      margin-bottom: 2em;
    }
  `};
`;

export default PostColumn;

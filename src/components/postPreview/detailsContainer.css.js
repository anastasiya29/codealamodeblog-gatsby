import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { gray } from 'constants/theme';

const DetailsContainer = styled.div`
  color: ${gray};
  .tags span {
    margin-left: 10px;
    &:first-of-type {
      margin-left: 0;
    }
  }
  ${MEDIA.MIN_DESKTOP`
    display: flex;
    .tags {
      flex-grow: 2;
      display: flex;
      justify-content: flex-end;
    }
  `};
`;

export default DetailsContainer;

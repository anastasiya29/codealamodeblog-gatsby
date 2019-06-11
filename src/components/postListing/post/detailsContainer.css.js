import styled from 'styled-components';
import { gray } from 'constants/theme';

const DetailsContainer = styled.div`
  color: ${gray};
  display: flex;
  .tags {
    flex-grow: 2;
    display: flex;
    justify-content: flex-end;
    span {
      margin-left: 10px;
    }
  }
`;

export default DetailsContainer;
import MEDIA from 'helpers/mediaTemplates';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0fr;
  grid-column-gap: 15px;
  ${MEDIA.MIN_DESKTOP`
      background-image: none;
      grid-template-columns: 2fr 1fr;
      img {
        border-radius: 25px;
      }
  `};
`;

export default Container;

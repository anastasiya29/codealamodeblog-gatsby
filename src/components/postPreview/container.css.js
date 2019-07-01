import MEDIA from 'helpers/mediaTemplates';
import styled from 'styled-components';

const Container = styled.div`
  ${MEDIA.PHONE`
    .highlight {
      width: 100%;
      display: block;
      text-align: center;
      margin-bottom: 10px;
    }
  `};
  ${MEDIA.MIN_DESKTOP`
    display: grid;
    grid-column-gap: 15px;
    background-image: none;
    grid-template-columns: 65% 35%;
    & > :nth-child(2) {
      display: initial;
    }
    img {
      border-radius: 25px;
    }
  `};
`;

export default Container;

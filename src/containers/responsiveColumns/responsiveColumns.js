import styled from 'styled-components';
import { Box } from 'rebass';
import MEDIA from 'helpers/mediaTemplates';

const ResponsiveColumns = styled(Box).attrs(({ p }) => ({
  p: p || ['1em', '3em', '4em'],
}))`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${MEDIA.MIN_TABLET`
    flex-direction: row;
    .wide {
      flex-grow: 3;
    }
  `};
`;

export default ResponsiveColumns;

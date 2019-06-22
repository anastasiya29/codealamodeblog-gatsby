import { Text } from 'rebass';
import styled from 'styled-components';
import { accentPink, accentTeal } from 'constants/theme';

const Title = styled(Text)`
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: ${accentTeal} 5px solid;
  &:hover {
    color: ${accentPink};
  }
`;

export default Title;

import styled from 'styled-components';

const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .right {
    justify-self: end;
    text-align: right;
  }
`;

export default NavigationContainer;
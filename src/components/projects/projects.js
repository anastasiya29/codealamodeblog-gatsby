import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import Card from 'containers/card';
import { softTeal } from 'constants/theme';

const Row = styled(Box).attrs({
  p: [10, 20]
})`
  background-color: ${softTeal};
  height: 200px;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;

const Projects = () => (
  <Row>
    <Card>jss-sandbox</Card>
    <Card>yeoman</Card>
    <Card>shared praceholders</Card>
    <Card>Coveo</Card>
  </Row>
);

export default Projects;

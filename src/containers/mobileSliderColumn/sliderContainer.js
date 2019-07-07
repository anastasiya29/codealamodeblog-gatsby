import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { softestGray, softGray } from 'constants/theme';

const SliderOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  transform: translate3d(-100vw, 0, 0);
  width: 100vw;
  height: 100vh;
  &.hide {
    transform: translate3d(-100vw, 0, 0);
  }
  &.show {
    transform: translate3d(0vw, 0, 0);
  }
  z-index: 5;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
`;

const Container = styled.div`
  ${MEDIA.PHONE`
    background-color: ${softestGray};
    padding: 2em;
    width: 65vw;
    border-radius: 7px;
    border: ${softGray} solid 1px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  `};
`;

const SliderContainer = props => (
  <SliderOverlay {...props} onMouseDown={props.handleMouseDown}>
    <Container>{props.children}</Container>
  </SliderOverlay>
);

SliderContainer.propTypes = {
  className: PropTypes.oneOf(['hide', 'show']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  handleMouseDown: PropTypes.func.isRequired,
};

export default SliderContainer;

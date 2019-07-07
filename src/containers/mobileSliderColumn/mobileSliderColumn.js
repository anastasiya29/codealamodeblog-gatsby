import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toggle from './toggle';
import SliderContainer from './sliderContainer';

class MobileSliderColumn extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleSlider = this.toggleSlider.bind(this);
  }

  handleMouseDown(e) {
    this.toggleSlider();
    e.stopPropagation();
  }

  toggleSlider() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    const visibility = this.state.visible ? 'show' : 'hide';
    return (
      <>
        <Toggle handleMouseDown={this.handleMouseDown} />
        <SliderContainer
          handleMouseDown={this.handleMouseDown}
          className={visibility}
          {...this.props}
        >
          {this.props.children}
        </SliderContainer>
      </>
    );
  }
}

MobileSliderColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default MobileSliderColumn;

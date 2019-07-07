import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toggle from './toggle';
import SliderContainer from './sliderContainer';
import BREAKPOINTS from 'constants/breakpoints';

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
    if (this.isPhone) {
      this.bodyEl.style.overflow = this.state.visible ? 'scroll' : 'hidden';
      this.setState({
        visible: !this.state.visible,
      });
    }
  }

  componentDidMount() {
    this.bodyEl = document.getElementsByTagName('body')[0];
    this.isPhone = window.innerWidth < BREAKPOINTS.PHONE;
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

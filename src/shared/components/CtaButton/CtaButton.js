import React, { Component, } from 'react';

class CtaButton extends Component {
  render() {
    return(
      <button
        className={this.props.color}
        onClick={this.props.clickEvent}
        >
          {this.props.buttonText}
        </button>
    );
  }
};

export default CtaButton;

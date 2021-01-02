import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Button extends Component {
  
  render() {
    return (
      <button onClick={this.props.press}>{ this.props.children }</button>      
    );
  }
}

// Button.defaultProps = {
//   title: 'Comportamento Padrão',
//   description: ''
// }

// Button.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string
// }


export default Button;
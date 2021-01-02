import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  
  render() {
    return (
      <div>
         {this.props.title} - {this.props.description}
        <button>{ this.props.children }</button>
      </div>
    );
  }
}

Button.defaultProps = {
  title: 'Comportamento Padrão',
  description: ''
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}


export default Button;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static defaultProps = {
    title: 'Comportamento Padrão',
    description: ''
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }

  render() {
    return (
      <div>
         {this.props.title} - {this.props.description}
        <button>{ this.props.children }</button>
      </div>
    );
  }
}

export default Button;
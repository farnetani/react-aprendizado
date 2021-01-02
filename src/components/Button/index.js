import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        {this.props.numero} {this.props.title} - {this.props.description}
        <button>{ this.props.children }</button>
      </div>
    );
  }
}

export default Button;
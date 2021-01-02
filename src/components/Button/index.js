import React from 'react';

const Button = (props) => (
  <button onClick={props.press}>{props.children}</button>     
);


export default Button;
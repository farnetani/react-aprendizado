import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button';

class App extends React.Component {
  state = {
    contador: 0,
  }

  adicionar = () => {
    alert("adicionar")
  }

  render() {
    return (
      <h1>
        Hello React!!

        <Button press={this.adicionar}>Update</Button>
        <Button title="teste">Salvar</Button>
      </h1>
    );
  }
}

render(<App />, document.getElementById('app'));
import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button';

class App extends React.Component {
  state = {
    contador: 0,
    nome: '',
  }

  changeText = (event) => {
    this.setState({
      nome: event.target.value,
    })
  }

  adicionar = () => {
    this.setState({
      contador: this.state.contador+1,
    })
  }

  diminuir = () => {
    this.setState({
      contador: this.state.contador-1,
    })
  }

  zerar = () => {
    this.setState({
      contador: 0,
    })
  }

  render() {
    console.log('executa o render a cada mudança de estado!')
    return (
      <div>
        Contador: {this.state.contador}
        <br/>
        <Button press={this.adicionar}>Adicionar</Button>
        <Button press={this.diminuir}>Diminuir</Button>
        <Button press={this.zerar}>Zerar</Button>
        <br/>
        <br/>
        <input onChange={this.changeText} />
        <br/>
        <br/>
        <p>{this.state.nome}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

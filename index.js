import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Contador extends React.Component {
  state = {
    conteo: 0
  }
  increment = () => {
    this.setState(() => ({conteo: this.state.conteo+1}));
  }
  render() {
    return <div className="div">
    <h1><p>{this.state.conteo}</p></h1>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const count = <Contador />; 
ReactDOM.render(
  count, 
  document.getElementById('root')
);
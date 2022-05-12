import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState(() => ({counter: this.state.counter+1}));
  }
  render() {
    return <div >
    <h1><p>{this.state.counter}</p></h1>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter className="div"/>; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
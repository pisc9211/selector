import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    shape: ''
  }

  handleClick = (e) => {
    this.setState({
      shape: e.target.dataset.shape
    })
  }

  render() {
    return (
      <div className="app">
        <h1>APP!!!!!!!! :)</h1>
        <h2>Selected: {this.state.shape}</h2>
        <div className="shapes">
          <div className="shape square" data-shape="Square" onClick={this.handleClick}></div>
          <div className="shape circle" data-shape="Circle" onClick={this.handleClick}></div>
          <div className="shape triangle" data-shape="Triangle" onClick={this.handleClick}></div>
        </div>
      </div>
    )
  }
}

export default App;

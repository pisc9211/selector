import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    shape: 'Please Select A Shape'
  }

  handleClick = (e) => {
    this.setState({
      shape: e.target.dataset.shape
    })
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">Selected:&nbsp;&nbsp;&nbsp;&nbsp;<span className="name">{this.state.shape}</span></div>
        <div className="shape-list">
          <div className="shape square" data-shape="Square" onClick={this.handleClick}></div>
          <div className="shape circle" data-shape="Circle" onClick={this.handleClick}></div>
          <div className="shape triangle" data-shape="Triangle" onClick={this.handleClick}></div>
          <div className="shape oval" data-shape="Oval" onClick={this.handleClick}></div>
          <div className="shape star" data-shape="Star" onClick={this.handleClick}></div>
          <div className="shape triangle_down" data-shape="Triangle_down" onClick={this.handleClick}></div>
          <div className="shape triangle_right" data-shape="Triangle_right" onClick={this.handleClick}></div>
          <div className="shape triangle_left" data-shape="Triangle_left" onClick={this.handleClick}></div>
          <div className="shape trapezium" data-shape="Trapezium" onClick={this.handleClick}></div>
        </div>
      </div>
    )
  }
}

export default App;

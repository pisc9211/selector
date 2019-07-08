import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    shape: ''
  }

  componentDidMount() {
    let arr = ['Square', 'Circle', 'Triangle', 'Oval', 'Star', 'Triangle_down', 'Triangle_right', 'Triangle_left', 'Trapezium'];
    let obj = {};
    arr.forEach(x => obj[x] = 0);
    this.setState({
      count: obj
    })
  }

  handleClick = (e) => {
    let newObj = Object.assign(this.state.count);
    newObj[e.target.dataset.shape]++;
    this.setState({
      shape: e.target.dataset.shape,
      count: newObj
    })
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">Selected:&nbsp;&nbsp;&nbsp;&nbsp;<span className="name">{this.state.shape}</span> - Clicked: &nbsp;&nbsp;&nbsp;&nbsp; <span className="name">{this.state.shape ? this.state.count[this.state.shape] : null}</span></div>
        <div className="shape-list">
          <div>
            <div className="shape square" data-shape="Square" onClick={this.handleClick}></div>
          </div>
          <div>
            <div className="shape circle" data-shape="Circle" onClick={this.handleClick}></div>
          </div>
          <div>
            <div className="shape triangle" data-shape="Triangle" onClick={this.handleClick}></div>
          </div>
          <div> 
            <div className="shape oval" data-shape="Oval" onClick={this.handleClick}></div>
          </div>
          <div>
            <div className="shape star" data-shape="Star" onClick={this.handleClick}></div>
          </div>
          <div>
            <div className="shape triangle_down" data-shape="Triangle_down" onClick={this.handleClick}></div>
          </div>
          <div>
            <div className="shape triangle_right" data-shape="Triangle_right" onClick={this.handleClick}></div>
          </div>
          <div>
            <div className="shape triangle_left" data-shape="Triangle_left" onClick={this.handleClick}></div>
          </div>
          <div>
            <div className="shape trapezium" data-shape="Trapezium" onClick={this.handleClick}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

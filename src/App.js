import React, { Component } from 'react';
import './App.css';

import Shape from './Shape';

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
    let shape = e.target.getAttribute('name')
    let newObj = Object.assign({}, this.state.count);
    newObj[shape]++;
    this.setState({
      shape,
      count: newObj
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Shape &ndash; Selector</h1>
        <div className="body">
          <div className="result">
            <h2>Tracker</h2>
            <div className="current-shape">Current Shape: 
              <div className="shape-name">
                <strong>{this.state.shape ? this.state.shape : 'None'}</strong>
              </div>
            </div >
            <div className="number-clicked">Times clicked: 
              <div className="number">
                <strong>{this.state.shape ? this.state.count[this.state.shape] : 0}</strong>
              </div>
            </div>
          </div>
          <div className="shape-list">
            <ul>
              {
                this.state.count ? Object.keys(this.state.count).map(key => <Shape name={key} handleClick={this.handleClick}/>) : null
              }
            </ul>
        </div>
        </div>
      </div>
    )
  }
}

export default App;

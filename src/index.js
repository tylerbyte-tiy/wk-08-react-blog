import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';

class App extends Component {

render() {
  return(
    <div className="app">
      <div className="app-header">
      </div>
      <div className="app-wrapper">
        <div className="app-nav">
          <div className="nav-item screen1">
            <p>Screen 1</p>
            </div>
          <div className="nav-item screen2">
            <p>Screen 1</p>
            </div>
          <div className="nav-item screen3">
            <p>Screen 1</p>
          </div>
        </div>
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    </div>
  )
}
}

ReactDOM.render(
  <App>
    <h1>Message</h1>
</App>,
  document.getElementById('root'));

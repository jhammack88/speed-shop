import React, { Component } from 'react';
// import Mens from "./pages/Mens"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1 className="title">SpeedShop</h1>
        <div className="btn-group">
        <button className="header-btn-m">Mens</button>
        <button className="header-btn-w">Womens</button>
        <button className="header-btn-k">Kids</button>      
        </div>
      </div>
    );
  }
}

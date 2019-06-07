import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Clock />
      </body>
    </div>
  );
}

export default App;

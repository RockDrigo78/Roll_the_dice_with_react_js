import React from 'react';
import logo from '../logo.svg';
import './App.css';
import RollDice from './RollDice';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" /><br/>
      <RollDice />
    </div>
  );
}

export default App;

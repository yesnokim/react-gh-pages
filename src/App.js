import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Sample } from './component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          react github page hosting test sample
        </p>
        <Sample />
      </header>
    </div>
  );
}

export default App;

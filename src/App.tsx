
import './App.css'
import React from 'react'

import wb from './Components/Assets/wb.svg';
import bb from './Components/Assets/bb.svg';
import InitBoard from './Components/Board/InitGen'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={wb} className="wb" alt="alive" />
        <img src={bb} className="bb" alt="dead" />

        <h1 className="title">
          Conway's Game of Life
        </h1>
        <InitBoard/>
        <h3>let's go</h3>
      </header>
    </div>
  );
}

export default App

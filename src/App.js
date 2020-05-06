import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greeting from './Components/Greeting';
import {IdGen,NewId} from  './Components/IDGEN';
// import * as Bulk from './Components/Bulk'; es tarberaknery chen ashxatum??? 
// import {SomeText,SecondText,ThirdText} as Bulk from './Components/Bulk';
import {SomeText,SecondText,ThirdText}  from './Components/Bulk';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greeting/>
      <IdGen/>
      <NewId/>
      <SomeText/>
      <SecondText/>
      <ThirdText/>
    </div>
  );
}

export default App;

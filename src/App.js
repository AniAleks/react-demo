import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greeting from './Components/Greeting';
// import {IdGen,NewId} from  './Components/IDGEN';
// import greet, {idGen as idGenerator, Hello, getThis} from './tools';
// import * as newObj from './tools';
// import User from './Components/User';
// import {SomeText,SecondText,ThirdText}  from './Components/Bulk';
// import Input from './Components/Input';
import ToDo from './Components/ToDo'

function App() {
   // const {Hello} = newObj;
  // const components = [
  //   <p>text 1</p>,
  //   <p>text 2</p>,
  //   <p>text 3</p>,
  // ];
  return (
    <div className="App">

      {/* <User name='Bill' surname='Gates'/>
      <User name='Jack' surname='Sparrow'/>
      <User name='Kulie' surname='Minogue'/> */}
      <ToDo/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
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
      <ThirdText/> */}
    </div>
  );
}

export default App;

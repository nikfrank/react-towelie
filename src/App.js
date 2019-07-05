import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}


const hoc = (R, initState, N)=> ({
  s: ([state, setState] = useState({})),
  stateHandlers = Object.keys(initState).sort().reduce((sh, s)=> ({
    ...sh,
    [s, 'set'+s] = useState(initState[s]),
  }), {}),
  connections = N.reduce(( connections, c, { name=Object.keys(c)[0] } )=> ({
    ...connections, [name]: (0),
    }), {})
})=> (
  
  <R/>
);


export default App;

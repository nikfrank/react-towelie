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
  networkStateHandler: ([networkState, setNetworkState] = useState({})),
  
  stateHandlers = Object.keys(initState).sort().reduce((sh, s, {
    stateHandler = useState(initState[s]),
  })=> ({
    ...sh, [s]:stateHandler[0], ['set'+s[0].toUpperCase()+s.slice(1)]: stateHandler[1],
  }), {}),
  
  connections = Object.keys(N).sort().reduce(( connections, c, {
    name=Object.keys(c)[0]
  } )=> ({
    ...connections, [name]: (...a)=> c[name](...a)
      .then(nextState => setNetworkState({ ...networkState, ...nextState }) )
      .catch(error => setNetworkState({ ...networkState, error }) ),
    }), {})
})=> (
  
  <R/>
);


export default App;

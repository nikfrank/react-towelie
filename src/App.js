import React from 'react';
import logo from './logo.svg';
import './App.css';

import hoc from './hoc';

export default hoc(({
  count, setCount, saveCount, networkCount,
})=> (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={()=> setCount(count+1)}>Count</button>
      <button onClick={()=> saveCount(count)}>Save</button>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
      >
        Learn React x{count} X{networkCount}
      </a>
    </header>
  </div>
), {
  count: 0
}, {
  saveCount: (countToSave)=> (new Promise(res =>
    setTimeout(()=> res({ networkCount: countToSave }), 2000)
  )),
}, [
  ({
    count, networkCount,
  })=> (
    (count > 10) && (networkCount > 10) ? ({
      count: 0, networkCount: 0,
    }) : null
  )
]);

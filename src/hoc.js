import React, { useState, useEffect } from 'react';

export default (R, initState={}, N={}, E)=> ({
  stateHandler: ([state, setState] = useState(initState)),
  
  stateHandlers = Object.keys(initState).sort().reduce((sh, s)=> ({
    ...sh, ['set'+s[0].toUpperCase()+s.slice(1)]: val=> setState({ ...state, [s]: val }),
  }), {}),
  
  connections = Object.keys(N).sort().reduce(( connections, c )=> ({
    ...connections, [c]: (...a)=> N[c](...a)
      .then(nextState => setState({ ...state, ...nextState }) )
      .catch(error => setState({ ...state, error }) ),
  }), {}),

  effects = E.map(e=> useEffect(({
    sideEffect=e({...state, ...stateHandlers, ...connections}),
  }={})=>
    sideEffect ? setState({ ...state, ...sideEffect }) : void 0 )),
})=> (
  <R {...state} {...stateHandlers} {...connections} />
);

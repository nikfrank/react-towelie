# react towelie

because react-towel was taken, and you always need your towel, and towelie is your towel


Use `useState` and `useEffect` without having to learn them?

great, how's it work?

<sub>./src/App.js</sub>
```js
import React from 'react';
import towelie from 'react-towelie';

export default towelie(({ count, setCount })=> (
  <div onClick={()=> setCount(count+1)}>{count}</div>
), {
  count: 0
}, {}, [
  ({ count }) => count > 10 ? ({ count: 0 }) : null
]);
```

## render
## state
## network
## effects





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


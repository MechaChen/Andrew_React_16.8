import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// 
// Goal: Add -1 and reset button to component
//
// 1. Allow initial count to be configured using a count prop (default to 0)
// 2. Add "-1" button to reduce count by 1
// 3. Add "reset" button to reset count
// 4. Test your work!

const App = (props) => {
  const [count, setCount] = useState(props.count);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(props.count);
  }

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

App.defaultProps = {
  count: 0
}

ReactDOM.render(<App count={30}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

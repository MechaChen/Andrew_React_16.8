import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// { count: 0, name: '' }

const App = () => {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

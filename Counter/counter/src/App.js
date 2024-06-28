import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const Prime = (num) => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div className="App">
      <h1> Counter </h1>
      <div className="btn">
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
      <button className="count" onClick={() => setCount(0)}>Reset Count</button>
      <h2>Count: {count}</h2>
      <p>This Number is: <span>{count % 2 === 0 ? 'Even' : 'Odd'}</span></p>
      <p>Prime Number: <span>{Prime(count).toString()}</span></p>
    </div>
  );
}

export default App;

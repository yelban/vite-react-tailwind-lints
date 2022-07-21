import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <div className="text-6xl text-red-600">{count}</div>
      <button
        className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white"
        type="button"
        onClick={() => setCount((counter) => counter + 1)}
      >
        count+
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default Counter;

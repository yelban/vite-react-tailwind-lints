import './App.css';

import React, { useState } from 'react';

import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App p-2 mx-6 rounded-2xl w-96">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-row">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className=" w-28 m-5 hover:drop-shadow-vite" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="animate-spin-slow w-28 m-5 hover:drop-shadow-react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-5xl tracking-wide text-center font-bold mt-10">Vite + React</h1>
        <div className="text-center mt-12">
          <button
            type="button"
            className="bg-zinc-900 px-5 py-2 m-5 rounded-lg border-x border-y border-zinc-900 hover:border-x hover:border-y hover:border-indigo-500/100 focus:ring-2 focus:ring-blue-300"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-slate-100 font-light">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-stone-500 font-light mt-16">Click on the Vite and React logos to learn more</p>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import reactLogo from '../assets/react.svg';

function Brand() {
  return (
    <div>
      <h1>Vite + React</h1>
      <div className="flex flex-row justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default Brand;

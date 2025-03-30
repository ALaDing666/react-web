import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log(num);
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img onClick={() => setNum(num + 1)} src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

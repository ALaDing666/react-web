import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import './App.less';
// import './App.scss';
// import './App.styl';

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log(num);
  }, [num]);
  const clickHandler = () => setNum(num + 1);
  return (
    <div className='App'>
      <header className='App-header'>
        <img onClick={clickHandler} src={logo} className='App-logo' alt='logo' />
        <p onClick={() => setNum(num + 1)}>
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

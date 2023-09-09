import { useState } from 'react';
import './App.css';
import ToggleSwitch from './ToggleSwitch';

function App() {
  const [isOn, setIsOn] = useState('on');
  let className = `button ${isOn}`;

  function handleClick() {
    isOn === 'on' ? setIsOn('off') : setIsOn('on');
  }

  return (
    <>
      <ToggleSwitch
        onClick={handleClick}
        className={className}
        text={isOn.toUpperCase()}></ToggleSwitch>
    </>
  );
}

export default App;

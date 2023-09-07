import { useState } from 'react';
import './App.css';
import HotButton from './HotButton';

function App() {
  const [count, setCount] = useState(0);
  const [background, setBackground] = useState('darker-purple');
  const className = `btn ${background}`;

  function handleClick() {
    setCount(count + 1);
    changeBackgroundColor(count);
  }

  function changeBackgroundColor(count) {
    switch (count) {
      case 2:
        setBackground('dark-purple');
        break;
      case 5:
        setBackground('purple');
        break;
      case 8:
        setBackground('pink');
        break;
      case 11:
        setBackground('orange');
        break;
      case 14:
        setBackground('yellow');
        break;
      case 17:
        setBackground('light-gray');
        break;
    }
  }

  return (
    <div>
      <HotButton
        onClick={handleClick}
        className={className}
        text="Hot Button"></HotButton>
    </div>
  );
}

export default App;

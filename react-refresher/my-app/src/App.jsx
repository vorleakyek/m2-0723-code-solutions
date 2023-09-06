import { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [counter, setCounter] = useState(0);

  function handleUpClick() {
    setCounter(counter + 1);
  }

  function handleDownClick() {
    setCounter(counter - 1);
  }

  return (
    <div className="flex">
      <Button text="Down" onClick={handleDownClick}></Button>
      <p className="padding bold"> {counter} </p>
      <Button text="Up" onClick={handleUpClick}></Button>
    </div>
  );
}

export default App;

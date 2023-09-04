import { useState } from 'react';

export default function TooggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  const bgColor = 'gray';

  console.log('useState', isClicked);

  function handleClick() {
    console.log('before setter', isClicked);
    setIsClicked(!isClicked);
    console.log('After setter', isClicked);
  }

  return (
    <button onClick={handleClick} className={isClicked ? color : bgColor}>
      {text}
    </button>
  );
}

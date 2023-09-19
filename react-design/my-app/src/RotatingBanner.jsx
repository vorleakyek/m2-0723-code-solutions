import { useState } from 'react';
import Indicators from './Indicators';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import Banner from './Banner';
import './App.css';

export default function RotatingBanner({ listItems }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClick(index) {
    setCurrentIndex(index);
  }

  function handleNext() {
    const nextIndex = (currentIndex + 1) % listItems.length;
    setCurrentIndex(nextIndex);
  }

  function handlePrev() {
    const prevIndex = (currentIndex - 1 + listItems.length) % listItems.length;
    setCurrentIndex(prevIndex);
  }

  return (
    <div>
      <Banner item={listItems[currentIndex]} />
      <PreviousButton onCustomClick={handlePrev} />
      <Indicators
        count={listItems.length}
        currentIndex={currentIndex}
        onCustomClick={handleClick}
      />
      <NextButton onCustomClick={handleNext} />
    </div>
  );
}

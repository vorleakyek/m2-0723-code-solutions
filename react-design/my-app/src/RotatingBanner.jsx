import { useState } from 'react';
import Indicators from './Indicators';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import Banner from './Banner';
import './App.css';

export default function RotatingBanner({ listItems }) {
  const [currentIndex /*, setCurrentIndex */] = useState(2);

  return (
    <div>
      <Banner item={listItems[currentIndex]} />
      <PreviousButton />
      <Indicators count={listItems.length} currentIndex={currentIndex} />
      <NextButton />
    </div>
  );
}

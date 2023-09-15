import Indicators from './Indicators';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import Banner from './Banner';
import './App.css';

export default function RotatingBanner({ listItems }) {
  return (
    <>
      <Banner />
      <PreviousButton />
      <Indicators listItems={listItems} />
      <NextButton />
    </>
  );
}

import './App.css';
import SearchableList from './SearchableList';

const listItems = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  "What's orange and sounds like a parrot? A carrot!",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
  'I used to play piano by ear, but now I use my hands',
  "Why couldn't the bicycle stand up by itself? Because it was two-tired!",
  "I'm reading a book on anti-gravity. It's impossible to put down.",
  'I hope these jokes brought a smile to your face!',
  'Did you hear about the claustrophobic astronaut? He just needed a little space.',
  'Why did the bicycle fall over? Because it was two-tired.',
];

function App() {
  return (
    <>
      <SearchableList items={listItems} />
    </>
  );
}

export default App;

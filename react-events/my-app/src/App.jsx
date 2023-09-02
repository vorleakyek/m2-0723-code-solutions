import './App.css';
import './CustomButton.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(text);
  }

  return (
    <div>
      <CustomButton
        color="orange"
        text="Button 1"
        onCustomClick={() => {
          handleCustomClick('Button 1 is being clicked');
        }}
      />
      <CustomButton
        color="teal"
        text="Button 2"
        onCustomClick={() => {
          handleCustomClick('Button 2 is being clicked');
        }}
      />
      <CustomButton
        color="gold"
        text="Button 3"
        onCustomClick={() => {
          handleCustomClick('Button 3 is being clicked');
        }}
      />
    </div>
  );
}

export default App;

import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';
function App() {
  return (
    <>
      <h2>Uncontrolled Form</h2>
      <RegistrationFormUncontrolled />
      <h2>Controlled Form</h2>
      <RegistrationFormControlled />
    </>
  );
}

export default App;

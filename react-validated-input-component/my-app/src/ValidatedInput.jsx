import { useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [iconWrapper, setIconWrapper] = useState('icon-wrapper hidden');
  const [icon, setIcon] = useState('');

  function updateSetStates(errorMessage, iconWrapper, reactIcon) {
    setErrorMessage(errorMessage);
    setIconWrapper(iconWrapper);
    setIcon(reactIcon);
  }

  function handleValidation(e) {
    const { value } = e.target;
    const regEx = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).+/;
    const passRegExTest = regEx.test(value);
    setPassword(value);
    if (value.length === 0) {
      updateSetStates(
        'A password is required.',
        'icon-wrapper',
        <FaX className="icon" />
      );
    } else if (value.length > 0 && value.length < 8) {
      updateSetStates(
        'Your password is too short.',
        'icon-wrapper',
        <FaX className="icon" />
      );
    } else if (value.length >= 8 && !passRegExTest) {
      updateSetStates(
        'Your password should contain a digit, a capital letter, and a special character.',
        'icon-wrapper',
        <FaX className="icon" />
      );
    } else if (value.length >= 8 && passRegExTest) {
      updateSetStates('', 'icon-wrapper', <FaCheck className="check" />);
    }
  }

  return (
    <div>
      <label htmlFor="password">Password</label>
      <div className="flex">
        <input
          name="password"
          id="password"
          type="password"
          className="form-control"
          value={password}
          onChange={handleValidation}
          required
        />
        <div className={iconWrapper}>{icon}</div>
      </div>
      <div>
        <p className="message">{errorMessage}</p>
      </div>
    </div>
  );
}

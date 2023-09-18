import { useState } from 'react';
import { FaX, FaCheck } from 'react-icons/fa6';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  const feedback = displayMessage(password);
  const classes = feedback[3];

  function handleValidation(e) {
    const { value } = e.target;
    setPassword(value);
  }

  function displayMessage(value) {
    let classes = 'message hidden';
    let iconWrapper = 'icon-wrapper hidden';
    let errorMessage = '';
    let icon = '';
    const regEx = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).+/;
    const passRegExTest = regEx.test(value);

    if (value.length === 0) {
      errorMessage = 'A password is required.';
      iconWrapper = 'icon-wrapper';
      icon = <FaX className="icon" />;
      classes = 'message';
    } else if (value.length > 0 && value.length < 8) {
      errorMessage = 'Your password is too short.';
      iconWrapper = 'icon-wrapper';
      icon = <FaX className="icon" />;
      classes = 'message';
    } else if (value.length >= 8 && !passRegExTest) {
      errorMessage =
        'Your password should contain a digit, a capital letter, and a special character.';
      iconWrapper = 'icon-wrapper';
      icon = <FaX className="icon" />;
      classes = 'message';
    } else if (value.length >= 8 && passRegExTest) {
      icon = <FaCheck className="check" />;
      classes = 'message';
      iconWrapper = 'icon-wrapper';
    }
    return [errorMessage, iconWrapper, icon, classes];
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
        <div className={feedback[1]}>{feedback[2]}</div>
      </div>
      <div>
        <p className={classes}>{feedback[0]}</p>
      </div>
    </div>
  );
}

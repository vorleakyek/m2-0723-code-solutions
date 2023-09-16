import { useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';

export default function ValidatedInput() {
  const [data, setData] = useState({
    password: '',
    iconWrapper: '',
    icon: '',
    errorMessage: '',
  });

  function handleValidation(e) {
    const { value } = e.target;
    const regEx = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).+/;
    const passRegExTest = regEx.test(value);

    if (value.length === 0) {
      setData({
        password: value,
        errorMessage: 'A password is required.',
        iconWrapper: 'icon-wrapper',
        icon: <FaX className="icon" />,
      });
    } else if (value.length > 0 && value.length < 8) {
      setData({
        password: value,
        errorMessage: 'Your password is too short.',
        iconWrapper: 'icon-wrapper',
        icon: <FaX className="icon" />,
      });
    } else if (value.length >= 8 && !passRegExTest) {
      setData({
        password: value,
        errorMessage:
          'Your password should contain a digit, a capital letter, and a special character.',
        iconWrapper: 'icon-wrapper',
        icon: <FaX className="icon" />,
      });
    } else if (value.length >= 8 && passRegExTest) {
      setData({
        password: value,
        errorMessage: '',
        iconWrapper: 'icon-wrapper',
        icon: <FaCheck className="check" />,
      });
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
          value={data.password}
          onChange={handleValidation}
          required
        />
        <div className={data.iconWrapper}>{data.icon}</div>
      </div>
      <div>
        <p className="message">{data.errorMessage}</p>
      </div>
    </div>
  );
}

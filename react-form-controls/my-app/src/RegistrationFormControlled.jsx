import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('state:', { userName: `${userName}`, password: `${password}` });
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

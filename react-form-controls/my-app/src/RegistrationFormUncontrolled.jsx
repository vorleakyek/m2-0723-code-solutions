export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log('form value', formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Username: <input name="userName" type="text" />
      </label>
      <label>
        Password: <input name="password" type="password" />
      </label>
      <button type="submit">Sign UP</button>
    </form>
  );
}

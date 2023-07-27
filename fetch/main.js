async function logUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.ok === false) {
      throw new Error(`server status code: ${response.status}`);
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error('Error:', error);
  }
}

logUsers();

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then((response) => {
    if (response.ok === false) {
      throw new Error(`server status code: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error', error);
  });

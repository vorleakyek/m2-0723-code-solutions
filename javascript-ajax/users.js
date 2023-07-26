const userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  const xhrResponse = xhr.response;
  xhrResponse.forEach(({ name }) => {
    const li = document.createElement('li');
    userList.appendChild(li);
    li.textContent = name;
  });
});

xhr.send();

const submitElement = document.querySelector('.app__submit');
const testUserId_1 = "60d0fe4f5311236168a109cb";
const testUserId_2 = "60d0fe4f5311236168a109ce";
const userToEditId = '61a25502ba66731958f90803';

const getUsersList = () => {
  return fetch('http://127.0.0.1:5000/proxy/user?page=0&limit=10', {
    method: "GET"
  });
}

const getUserById = () => {
  return fetch(`http://127.0.0.1:5000/proxy/user/${testUserId_1}`, {
    method: "GET"
  });
}

const updateUserById = () => {
  return fetch(`http://127.0.0.1:5000/proxy/user/${userToEditId}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: 'TEST77'
    })
  });
}

const createUser = () => {
  return fetch(`http://127.0.0.1:5000/proxy/user/create`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: 'TEST10',
      lastName: 'TEST10',
      email: 'test10@test10.com',
      dateOfBirth: '11.11.1999',
      phone: '+77777777777',
      gender: 'female'
    })
  });
}

const deleteUserById = () => {
  return fetch(`http://127.0.0.1:5000/proxy/user/61b25e27b658e3c620b57997`, {
    method: "DELETE"
  });
}


const onFormSubmit = (evt) => {
  evt.preventDefault();
  getUserById()
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => {
      alert(error);
    });
}

submitElement.addEventListener('click', onFormSubmit);

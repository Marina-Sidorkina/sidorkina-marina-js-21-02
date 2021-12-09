const submitElement = document.querySelector('.app__submit');
const testUserId_1 = "60d0fe4f5311236168a109cb";
const testUserId_2 = "60d0fe4f5311236168a109ce";
const userToEditId = '61a25502ba66731958f90803';

const getUsersList = () => {
  return fetch('http://127.0.0.1:5000/proxy/user?page=0&limit=7', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

const getUserById = () => {
  return fetch(`http://127.0.0.1:5000/proxy/user/${testUserId_1}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
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

const onFormSubmit = (evt) => {
  evt.preventDefault();
  updateUserById()
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => {
      alert(error);
    });
}

submitElement.addEventListener('click', onFormSubmit);

const submitElement = document.querySelector('.app__submit');
const testUserId_1 = "60d0fe4f5311236168a109cb";
const testUserId_2 = "60d0fe4f5311236168a109ce";
const userToEditId = '61a25502ba66731958f90803';
const postId = "60d21b8667d0d8992e610d3f";

// USERS
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

// POSTS

const getPostsList = () => {
  return fetch('http://127.0.0.1:5000/proxy/post?page=0&limit=10', {
    method: "GET"
  });
}

const getPostById = () => {
  return fetch(`http://127.0.0.1:5000/proxy/post/${postId}`, {
    method: "GET"
  });
}

const getPostsListByUser = () => {
  return fetch(`http://127.0.0.1:5000/proxy/user/60d0fe4f5311236168a109ce/post?page=0&limit=5`, {
    method: "GET"
  });
}


const onFormSubmit = (evt) => {
  evt.preventDefault();
  getPostsListByUser()
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => {
      alert(error);
    });
}

submitElement.addEventListener('click', onFormSubmit);

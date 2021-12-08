const textareaElement = document.querySelector('.app__textarea');
const formElement = document.querySelector('.app__form');

const onFormSubmit = (evt) => {
  evt.preventDefault();
  fetch(textareaElement.value, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((error) => {
      alert(error);
    });
}

formElement.addEventListener('submit', onFormSubmit);

const textareaElement = document.querySelector('.app__textarea');
const formElement = document.querySelector('.app__form');
const submitElement = document.querySelector('.app__submit');
const POST_METHOD = 'POST';
const GET_METHOD = 'GET';
const CONTENT_TYPE = 'application/json';
const SUCCESS_TEXT = "Текст успешно сохранен!";
const ERROR_TEXT = 'Произошла ошибка...';
const BASE_URL = 'http://127.0.0.1:3000/api';
const FILE_PATH = '/file';
const FILE_POST_PATH = '/postFile';
const FILE_GET_PATH = '/getFile';
const SUCCESS_STATUS = 200;

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const text = textareaElement.value;
  if (text) {
    fetch(`${BASE_URL}${FILE_PATH}${FILE_POST_PATH}`, {
      method: POST_METHOD,
      headers: {
        'Content-Type': CONTENT_TYPE
      },
      body: JSON.stringify({ text: text })
    })
      .then((response) => {
        if(response.status !== SUCCESS_STATUS) {
          alert(ERROR_TEXT);
        } else {
          alert(SUCCESS_TEXT);
        }
      })
      .catch(() => {
        alert(ERROR_TEXT);
      });
  }
}

const onFormOpen = () => {
  submitElement.setAttribute('disabled', 'disabled');
  textareaElement.setAttribute('disabled', 'disabled');

  fetch(`${BASE_URL}${FILE_PATH}${FILE_GET_PATH}`, {
    method: GET_METHOD
  })
    .then((response) => response.json())
    .then((response) => {
      textareaElement.value = response.data.text;
    })
    .catch(() => {
      alert(ERROR_TEXT);
    })
    .finally(() => {
      submitElement.removeAttribute('disabled');
      textareaElement.removeAttribute('disabled');
    });
}

formElement.addEventListener('submit', onFormSubmit);

window.addEventListener('load', () => onFormOpen());

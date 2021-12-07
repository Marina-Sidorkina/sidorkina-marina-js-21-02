const textareaElement = document.querySelector('.app__textarea');
const formElement = document.querySelector('.app__form');
const submitElement = document.querySelector('.app__submit');
const POST_METHOD = 'POST';
const CONTENT_TYPE = 'application/json';
const SUCCESS_TEXT = "Текст успешно сохранен!";
const ERROR_TEXT = 'Произошла ошибка...';
const BASE_URL = 'http://127.0.0.1:3000/api';
const FILE_PATH = '/file';
const POST_PATH = '/postFile';
const SUCCESS_STATUS = 200;

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const text = textareaElement.value;
  if (text) {
    fetch(`${BASE_URL}${FILE_PATH}${POST_PATH}`, {
      method: POST_METHOD,
      headers: {
        'Content-Type': CONTENT_TYPE
      },
      body: JSON.stringify({ text: text })
    })
      .then((response) => {
        console.log(response);
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

formElement.addEventListener('submit', onFormSubmit);

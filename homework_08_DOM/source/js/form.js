'use strict';

(function () {

  const nameInputElement = document.querySelector(".form__input_name");
  const telInputElement = document.querySelector(".form__input_tel");
  const formElement = document.querySelector(".form");
  const formErrorTelElement = document.querySelector(".form__error_tel");
  const formErrorNameElement = document.querySelector(".form__error_name");

  const checkValidity = (name, tel) => {
    const telRegexp = /^(\+7)\s[0-9]{3}\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
    const nameRegexp = /^[А-Я][а-я]+\s[А-Я][а-я]+\s[А-Я][а-я]+$/;

    return name.value.match(nameRegexp) !== null && tel.value.match(telRegexp) !== null;
  }

  const showErrorMessage = () => {
    formErrorTelElement.classList.add("form__error_active");
    formErrorNameElement.classList.add("form__error_active");
  }

  const hideErrorMessage = () => {
    formErrorTelElement.classList.remove("form__error_active");
    formErrorNameElement.classList.remove("form__error_active");
  }

  const resetInputsValues = () => {
    nameInputElement.value = "Фамилия Имя Отчество";
    telInputElement.value = "+7 XXX XXX-XX-XX";
  }

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    if(checkValidity(nameInputElement, telInputElement)) {
      const newRecord = window.createNewDomElement.create(nameInputElement.value, telInputElement.value, window.records.items.length + 1);
      window.records.items.push([nameInputElement.value, telInputElement.value]);
      window.records.appendNewRecordsElement(newRecord);
      hideErrorMessage();
      resetInputsValues();
    } else {
      showErrorMessage()
    }
  }

  formElement.addEventListener("submit", onFormSubmit);

})();

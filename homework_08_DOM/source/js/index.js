const documentElement = document.documentElement;
const themeToggleElement = document.querySelector(".theme");
const nameInputElement = document.querySelector(".form__input_name");
const telInputElement = document.querySelector(".form__input_tel");
const formElement = document.querySelector(".form");
const tableElement = document.querySelector(".table__body");
let records = [
  ["Иванов Иван Иванович", "+7 777 777-77-77"],
  ["Петров Петр Петрович", "+7 777 777-77-77"],
];
let nameInputElementValue = "";
let telInputElementValue = "";

const changeTheme = (evt) => {
  documentElement.dataset.theme = evt.target.id;
}

const createNewRecord = (name, tel, num) => {
  const fragment = document.createDocumentFragment();
  const row = document.createElement("tr");
  const numCell = document.createElement("th");
  const nameCell = document.createElement("td");
  const telCell = document.createElement("td");
  const telSpan = document.createElement("span");
  const trashSpan = document.createElement("span");

  row.classList.add("table__row");
  numCell.classList.add("table__cell");
  nameCell.classList.add("table__cell");
  telCell.classList.add("table__cell", "table__cell_tel");
  trashSpan.classList.add("table__trash");
  trashSpan.dataset.row = num;

  numCell.innerText = num;
  nameCell.innerText = name;
  telSpan.innerText = tel;

  telCell.appendChild(telSpan);
  telCell.appendChild(trashSpan);
  row.appendChild(numCell);
  row.appendChild(nameCell);
  row.appendChild(telCell);
  fragment.appendChild(row);

  return row;
}

const updateRecordsElements = () => {
  console.log("work");
  const newElementsList = document.createDocumentFragment();
  records.forEach((record, index) => newElementsList
    .appendChild(createNewRecord(record[0], record[1], index + 1)));
  tableElement.innerHTML = "";
  tableElement.appendChild(newElementsList);
}

const removeRecordsItem = (index) => {
  records.splice(index, 1);
  updateRecordsElements();
}

const onNameInputElementChange = (evt) => nameInputElementValue = evt.target.value;
const onTelInputElementChange = (evt) => telInputElementValue = evt.target.value;

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const telRegexp = /^(\+7)\s[0-9]{3}\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
  const nameRegexp = /^[А-Я][а-я]+\s[А-Я][а-я]+\s[А-Я][а-я]+$/;

  if(nameInputElement.value.match(nameRegexp) && telInputElement.value.match(telRegexp)) {
    const newRecord = createNewRecord(nameInputElement.value, telInputElement.value, records.length + 1);
    records.push([nameInputElement.value, telInputElement.value]);
    tableElement.appendChild(newRecord);
  }
}

const onTrashClick = (evt) => {
  if(evt.target.classList.contains(("table__trash"))) {
    removeRecordsItem(parseInt(evt.target.dataset.row, 10) - 1);
    updateRecordsElements();
  }
}

themeToggleElement.addEventListener("change", changeTheme);
nameInputElement.addEventListener("input", onNameInputElementChange);
telInputElement.addEventListener("input", onTelInputElementChange);
formElement.addEventListener("submit", onFormSubmit);
tableElement.addEventListener("click", onTrashClick);

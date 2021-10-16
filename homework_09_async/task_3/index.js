const listBodyElement = document.querySelector(".list__body");
const controlElement = document.querySelector(".controls");
const sortButtonHeightElement = document.querySelector(".sort__button_height");
const sortButtonMassElement = document.querySelector(".sort__button_mass");
const sortButtonNameElement = document.querySelector(".sort__button_name");
const sortButtonGenderElement = document.querySelector(".sort__button_gender");
const URL_MAIN = "https://swapi.dev/api/people/";
const HEIGHT_INDEX = 3;
const MASS_INDEX = 2;
let next;
let prev;
let currentList = [];
let heightSorting = "up";
let massSorting = "up";

const isNumeric = (value) => {
  return /^\d+$/.test(value);
}

const sortByNumberValues = (index, sortingCategory) => {
  const numbers = currentList.filter((value) => isNumeric(value[index].replace(",","")));
  const unknown = currentList.filter((value) => !isNumeric(value[index].replace(",","")));
  if(sortingCategory === "up") {
    numbers.sort((a, b) => parseInt(a[index].replace(",",""), 10) - parseInt(b[index].replace(",",""), 10));
  } else {
    numbers.sort((a, b) => parseInt(b[index].replace(",",""), 10) - parseInt(a[index].replace(",",""), 10));
  }

  currentList = [...numbers, ...unknown]
  listBodyElement.innerHTML = "";
  currentList.forEach((item) => createNewListItem(item[0], item[1], item[2], item[3]));
}

const sortByHeight = () => {
  sortByNumberValues(HEIGHT_INDEX, heightSorting);
  heightSorting = heightSorting === "up" ? "down" : "up";
}

const sortByMass = () => {
  sortByNumberValues(MASS_INDEX, massSorting);
  massSorting = massSorting === "up" ? "down" : "up";
}

const sortByAlphabet = (first, second) => first[0].localeCompare(second[0]);

const sortByName = () => {
  currentList.sort(sortByAlphabet);
  listBodyElement.innerHTML = "";
  currentList.forEach((item) => createNewListItem(item[0], item[1], item[2], item[3]));
}

const sortByGender = () => {
  const male = currentList.filter((item) => item[1] === "male");
  const female = currentList.filter((item) => item[1] === "female");
  const unknown  = currentList.filter((item) => item[1] === "n/a");
  const hermaphrodite = currentList.filter((item) => item[1] === "hermaphrodite");
  const none = currentList.filter((item) => item[1] === "none");

  currentList = [...male, ...female, ...unknown, ...hermaphrodite, ...none];
  listBodyElement.innerHTML = "";
  currentList.forEach((item) => createNewListItem(item[0], item[1], item[2], item[3]));
}

const createNewListItem = (name, gender, mass, height) => {
  const documentFragment = document.createDocumentFragment();
  const rowElement = document.createElement("tr");
  const nameCellElement = document.createElement("td");
  const genderCellElement = document.createElement("td");
  const massCellElement = document.createElement("td");
  const heightCellElement = document.createElement("td");

  nameCellElement.innerText = name;
  nameCellElement.classList.add("list__cell");
  genderCellElement.innerText = gender;
  genderCellElement.classList.add("list__cell");
  massCellElement.innerText = mass;
  massCellElement.classList.add("list__cell");
  heightCellElement.innerText = height;
  heightCellElement.classList.add("list__cell");
  rowElement.classList.add("list__row");
  rowElement.appendChild(nameCellElement);
  rowElement.appendChild(genderCellElement);
  rowElement.appendChild(massCellElement);
  rowElement.appendChild(heightCellElement);
  documentFragment.appendChild(rowElement);

  listBodyElement.appendChild(documentFragment);
}

const changePage = (evt) => {
  if(evt.target.classList.contains("controls__button_prev") && prev) {
    listBodyElement.innerHTML = "";
    swapi(prev);
  }
  if(evt.target.classList.contains("controls__button_next") && next) {
    listBodyElement.innerHTML = "";
    swapi(next);
  }
}

const serveResponse = (response) => {
  currentList = [];
  response.results.forEach((item) => {
    createNewListItem(item["name"], item["gender"], item["mass"], item["height"]);
    currentList.push([item["name"], item["gender"], item["mass"], item["height"]]);
  });
  next = response["next"];
  prev = response["previous"];
}

const swapi = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(serveResponse)
}

swapi(URL_MAIN);

controlElement.addEventListener("click", changePage);
sortButtonHeightElement.addEventListener("click", sortByHeight);
sortButtonMassElement.addEventListener("click", sortByMass);
sortButtonNameElement.addEventListener("click", sortByName);
sortButtonGenderElement.addEventListener("click", sortByGender);

const listBodyElement = document.querySelector(".list__body");
const controlElement = document.querySelector(".controls");
const URL_MAIN = "https://swapi.dev/api/people/";
let next;
let prev;

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
  response.results.forEach((item) => {
    createNewListItem(item["name"], item["gender"], item["mass"], item["height"])
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

controlElement.addEventListener("click", changePage)

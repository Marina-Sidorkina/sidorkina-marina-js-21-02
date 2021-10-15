const listBodyElement = document.querySelector(".list__body");


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


fetch("https://swapi.dev/api/people/")
  .then(response => response.json())
  .then(response => {
    response.results.forEach((item) => {
      createNewListItem(item["name"], item["gender"], item["mass"], item["height"])
    });
  })

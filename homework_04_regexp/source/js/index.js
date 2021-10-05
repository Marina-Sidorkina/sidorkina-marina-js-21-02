const button_1 = document.getElementById("1");
const button_2 = document.getElementById("2");

const task_1 = () => {
  const input = prompt("Введите две строки через запятую");
  let strings;
  let firstString;
  let secondString;

  if(input) strings = input.split(",");

  if(strings && strings.length === 2 && strings[0].length && strings[1].length) {
    firstString = strings[0].trim().toLowerCase();
    secondString = strings[1].trim().toLowerCase();
    alert(firstString.includes(secondString))
  } else if(input !== null) {
    alert("Необходимо выполнить условие задачи!");
  }
}

const task_2 = () => {
  const input = prompt("Введите строку и число через запятую");
  let values;
  let string;
  let number;

  if(input) values = input.split(",");

  if(values && values.length === 2 && values[0].length && values[1].length && !isNaN(values[1])) {
    string = values[0].trim();
    number = parseInt(values[1].trim());
    alert(string.slice(0, number).concat("..."))
  } else if(input !== null) {
    alert("Необходимо выполнить условие задачи!");
  }
}

button_1.addEventListener("click", task_1);
button_2.addEventListener("click", task_2);
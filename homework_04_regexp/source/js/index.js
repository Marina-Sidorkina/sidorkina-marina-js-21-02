const button_1 = document.getElementById("1");
const button_2 = document.getElementById("2");
const button_3 = document.getElementById("3");
const button_4 = document.getElementById("4");
const button_5 = document.getElementById("5");
const button_6 = document.getElementById("6");
const button_7 = document.getElementById("7");
const button_8 = document.getElementById("8");

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

const task_3 = () => {
  const input = prompt("Введите строку с датой и временем в формате \"12/02/2021 12-00\"");
  const dateTest = /^\d{2}\/\d{2}\/\d{4} \d{2}-\d{2}$/;

  if(input && input.match(dateTest)) {
    const firstChange = /\//g;
    const secondChange = /-/g;
    alert(input.replace(/\//g, ".").replace(/-/g, ":"));
  } else if(input !== null) {
    alert("Необходимо выполнить условие задачи!");
  }
}

const task_4 = () => {
  const input = prompt("Введите строку кириллических символов (проверка ФИО)");
  const regexp = /^[а-яА-Я]+ [а-яА-Я]+( [а-яА-Я]+(вич|вна))?$/;

  if(input && input.match(regexp)) {
    alert(true);
  } else if(input && !input.match(regexp)) {
    alert(false);
  } else if(input !== null) {
    alert("Необходимо выполнить условие задачи!");
  }
}

const task_5 = () => {
  const input = prompt("Введите строку кириллических символов (проверка ФИО)");
  const replace = (value) => `_${value.toLowerCase()}`;
  const camelCaseTest = /^([A-ZА-Я]{1}[a-zа-я]+){2,}$/;

  if(input && camelCaseTest.test(input)) {
    alert(input.replace(/[A-Z]/g, replace).slice(1))
  } else if(input !== null) {
    alert("Необходимо выполнить условие задачи!");
  }
}

const task_6 = () => {
  const input = prompt("Введите многострочную строку");
  const regexp = /<!--.+?-->/gs;

  if(input && input.match(regexp)) {
    alert(input.match(regexp));
  } else if(input && !input.match(regexp)) {
    alert("Комментарии не найдены...");
  } else if(input !== null) {
    alert("Необходимо выполнить условие задачи!");
  }
}

const task_7 = () => {
  const input = prompt("Введите строку с числами");
  const regexp = /\d+\.?(\d+)?/g;

  if(input && input.match(regexp)) {
    alert(input.match(regexp));
  } else if(input && !input.match(regexp)) {
    alert("Числа не найдены...");
  } else if(input !== null) {
    alert("Необходимо выполнить условие задачи!");
  }
}

const task_8 = () => {
  const input = prompt("Введите идентификатор (4 группы по 4 символа с тире и/или без)");
  const regexp = /^([a-zA-Z0-9]{4}-?){3}[a-zA-Z0-9]{4}$/;

  if(input && regexp.test(input)) {
    alert("Ведется поиск...");
  } else if(input && !regexp.test(input)) {
    alert("Неверный идентификатор!");
  } else if(input !== null) {
    alert("Необходимо выполнить условие задачи!");
  }
}

button_1.addEventListener("click", task_1);
button_2.addEventListener("click", task_2);
button_3.addEventListener("click", task_3);
button_4.addEventListener("click", task_4);
button_5.addEventListener("click", task_5);
button_6.addEventListener("click", task_6);
button_7.addEventListener("click", task_7);
button_8.addEventListener("click", task_8);

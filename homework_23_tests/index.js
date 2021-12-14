// Введите две строки через запятую
const task_1 = (input) => {
  let strings;
  let firstString;
  let secondString;

  if(input) strings = input.split(",");

  if(strings && strings.length === 2 && strings[0].length && strings[1].length) {
    firstString = strings[0].trim().toLowerCase();
    secondString = strings[1].trim().toLowerCase();
    return firstString.includes(secondString);
  } else if(input !== null) {
    return false;
  }
}

// Введите строку и число через запятую
const task_2 = (input) => {
  let values;
  let string;
  let number;

  if(input) values = input.split(",");

  if(values && values.length === 2 && values[0].length && values[1].length && !isNaN(values[1])) {
    string = values[0].trim();
    number = parseInt(values[1].trim());
    return string.slice(0, number).concat("...");
  } else if(input !== null) {
    return false;
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
  const input = prompt("Введите строку  в CamelCase");
  const replace = (value) => `_${value.toLowerCase()}`;
  const camelCaseTest = /^([A-ZА-Я]{1}[a-zа-я]+){2,}$/;

  if(input && camelCaseTest.test(input)) {
    alert(input.replace(/[A-ZА-Я]/g, replace).slice(1))
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

// Возможна комбинация групп с тире и без
const task_8_1 = () => {
  const input = prompt("Введите идентификатор (4 группы по 4 символа с тире и/или без)");
  const regexp = /^([a-zA-Z0-9]{4}-?){3}[a-zA-Z0-9]{4}$/;

  if(input && regexp.test(input)) {
    alert("Ведется поиск...");
  } else if(input && !regexp.test(input)) {
    alert("Неверный идентификатор!");
    task_8_1();
  } else if(input !== null) {
    alert("Необходимо выполнить условие задачи!");
  }
}

// Все группы или разделены или нет
const task_8_2 = () => {
  const input = prompt("Введите идентификатор (4 группы по 4 символа с тире или без)");
  const regexp = /^((([a-zA-Z0-9]{4}-){3})|(([a-zA-Z0-9]{4}){3}))[a-zA-Z0-9]{4}$/;

  if(input && regexp.test(input)) {
    alert("Ведется поиск...");
  } else if(input && !regexp.test(input)) {
    alert("Неверный идентификатор!");
    task_8_2();
  } else if(input !== null) {
    alert("Необходимо выполнить условие задачи!");
  }
}

module.exports = {
  task_1,
  task_2,
  task_3,
  task_4,
  task_5,
  task_6,
  task_7,
  task_8_1,
  task_8_2
}
// TASK 1
// input: [1, 1, 3, 4, 4, 5, "value1", "value1", "value2"]
// output: [3, 5, "value2"]

const task_1 = (array) => {
  console.log(array.filter(item => array.indexOf(item) === array.lastIndexOf(item)));
}

// TASK 2
// input: [1, 3, 8, 5, 7]
// output: [7, 5, 8, 3, 1]

const task_2 = (array) => {
  const reversedArray = [];

  for(let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i])
  }

  console.log(reversedArray);
}

// TASK 3
// input: [
//  ['key1', "value1"],
//  ['key2', "value2"],
//  ['key3', "value3"]
// ]
// output: {
//  key1: "value1",
//  key2: "value2",
//  key3: "value3"
// }

const task_3 = (array) => {
  console.log(Object.fromEntries(array));
}

// TASK 4
// input: {
//  key1: 2,
//  key2: "value1",
//  key3: "value2",
//  key4: 5,
//  key5: 1
// }
// output: 8
  
const task_4 = (obj) => {
  console.log(Object.values(obj)
    .filter(value => typeof value === "number")
    .reduce((result, elem) => result + elem, 0));
}

// TASK 5
// input: [2, 4, 6, 7, 8, 9]
// output: 6

const task_5 = (array) => {
  console.log(array
    .reduce((result, elem) => result + elem, 0) / array.length);
}

// TASK 6

function Calculator() {
  this.value = 0;
  this.add = (number) => this.value += number;
  this.subtract = (number) => this.value -= number;
  this.multiply = (number) => this.value *= number;
  this.divide = (number) => this.value /= number;
  this.reset = () => this.value = 0;
}

// TASK 7
// input: ["value1", 2, 4, {key: "value"}, "value2", {key: "value"}]
// output: {
//  numbers: [2, 4],
//  objects: [{key: "value"}, {key: "value"}],
//  strings: ["value1", "value2"]
// }

const task_7 = (array) => {                                                        
  const result = {
    strings: [],
    numbers: [],
    objects: []
  };
  
  array.forEach((item) => {
    if(typeof item === "string") {result.strings.push(item)};
    if(typeof item === "number") {result.numbers.push(item)};
    if(typeof item === "object") {result.objects.push(item)};
  })
  
  console.log(result);
}

// TASK 8
// input: [2, 4, 7, 9, 15, 21, 25, 17, 11, 10], 10, 20
// output: [15, 17, 11, 10]

const task_8 = (array, min, max) => {
  console.log(array.filter(item => item >= min && item <= max));
}

// TASK 9
// input: "Ереван", "Венера"
// output: true

const task_9 = (firstString, secondString) => {
  const firstSort = firstString
                      .toLowerCase()
                      .replace(/\s/g, "")
                      .split("").sort()
                      .join("");
  const secondSort = secondString
                      .toLowerCase()
                      .replace(/\s/g, "")
                      .split("").sort()
                      .join("");
  
  console.log(firstString !== secondString && firstSort === secondSort);
}

// TASK 10
// output: "key1: value1, key2: 2"

const task_10 = {
  key1: "value1",
  key2: 2,
  showEntries: function() {
    const result = [];
    
    Object.entries(this)
      .forEach( ([key, value]) => {
        if(key !== "showEntries") {
        result.push(`${key}: ${value}`);
      }});

    console.log(result.join(", "));
  }
}

// TASK 11

function Task_11() {
  this.setProp = function(key, value, configObject = {}) {
    Object.defineProperty(this, key, {
      value: value,
      writable: configObject.hasOwnProperty("writable") ?
               configObject.writable : true,
      configurable: configObject.hasOwnProperty("configurable") ?
               configObject.configurable : true,
      enumerable: configObject.hasOwnProperty("enumerable") ?
               configObject.enumerable : true,
    });
  }
}

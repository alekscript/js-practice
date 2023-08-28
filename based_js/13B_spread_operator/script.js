"use strict";

let a = 5,
  b = a;

a = b + 5;

console.log(a);
console.log(b);

const obj = { 
  a: 5,
  b: 1,
};
// testsss
const copy = obj; // передает ссылку на объем - то есть его адрес в памяти.

copy.a = 10;

console.log(copy);
console.log(obj);

function copyObj(mainObj) {
  let objCopy = {};

  for (let key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copyObj(numbers);

newNumbers.a = 25;
newNumbers.c.x = 25;

console.log(newNumbers);
console.log(numbers);

// Ojbect.assign - метод позволяющий соеденить несколько объектов, который создает новый массив в виде копии соединенных.

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign({}, add));

const clone = Object.assign({}, numbers);

clone.c.x = 3000;

console.log(clone);

const oldArray = ["a", "b", "c"];

const newArray = oldArray.slice();
newArray[1] = "asdasdasdas";

console.log(newArray);
console.log(oldArray);

// spread оператор позволяет вытащить значения из массива через ... (это оператор разворота , он может делить данные на переменные новые)
const video = ["youtube", "vimeo", "tundra"],
  blogs = ["wordpress", "dle", "blogger"],
  internet = [...video, ...blogs];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];
log(...num);


// Оператор spread также может использоваться в обьектах


let objj = {
  one: 1,
  two: 2
}

const newObjss = {...objj};

console.log(newObjss);
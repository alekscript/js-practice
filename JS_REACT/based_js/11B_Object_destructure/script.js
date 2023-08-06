"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 768,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test!");
  },
};

options.makeTest();
// деструктуризация - разделение объекта на переменные со значениями объекта.
let {border, bg} = options.colors;
console.log(`${border} and ${bg}`);



// console.log(Object.keys(options).length);
// let vcount = Object.keys(options).length;
// console.log(vcount);

// // delete - метод удаления данных из объекта

// // delete options.name;

// console.log(options);

// // Циклдля перебора значений объекта "for (let key in object) { цикл }"

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let keyIn in options[key]) {
//       console.log(`Option ${keyIn} has value ${options[key][keyIn]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Option ${key} has value ${options[key]}`);
//     counter++;
//   } // ${key} - ключ значения, ${options[key]} - значение объекта
// }

// console.log(counter);

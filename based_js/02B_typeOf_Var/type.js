// Простые типа
Number = 1.3; // числа
String = 'my string'; // строка
Bolean = true; // or false логический оператор
Null = null; // значения нет
Symbol;

"use strict";

let number = 4.6;

const person = 'Alex';

const bool = true;


// undefined - когда переменная не определена

const John = {
  name: "John",
  age: 20,
  isMarried: false,
};

console.table(John.name);
console.table(John["name"]);

let array = ['plum.png', 'orange.jpg', 6, 'apple.bpm', {}, []];

console.table(array[3]);

console.table(array);


const arr = ['a', 'b', 'c'];
const arrObj = {
  a: 'a',
  1: 'b',
  2: 'c',
  abc: {
    def: {
      test: {
        split: [{}, {}],
      }
    }
  }
};

console.table(arr[1]);
console.table(arrObj.a)
console.table(arrObj[1])

arrObj.b = '234';
arrObj['c'] = '234';


console.table(arrObj)
console.table(arrObj.c)


const obj = {
  'Anna': 500,
  'Alice': 800
};


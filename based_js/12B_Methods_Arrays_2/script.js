"use strict";

const arr = [1, 5, 3, 25, 8];
arr.sort(function(a, b) {
  return a - b;
});
console.log(arr.length);


let testVal = arr.pop();
// Метод массива pop() - удаляет последний элемент и возвращает его значение.
arr.push(10);
// Метод push() добавляет значение в конец массива

console.log(arr);
console.log(testVal);

// Для переборки массива можно использовать цикл for()
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Цикл фороф для переборки for ( key of arr) {} (для массива и строки)
// можно использовать break; continue;
for (let value of arr) {
  console.log(value);
}

// Метод переборки элементов массива forEach
arr.forEach(function(item, i, arr){
  console.log(`${i}: ${item} inside array ${arr}`);
}); 

// методы перебора arr.map, arr.reduce, arr.filter

// split("разделитель") - делит строку на массив по разделителю
// join("разделитель") - соединяет элементы массива в строку через разд.
const str = "banana,apple,beacon,map";
const products = str.split(',');

products.sort();
console.log(products.join(' and '));


// Псевдомассив - не имеет методов, он хранит данные по порядку на странице.


// Метод slice("с какого", "по какой") - позволяет копировать массив. А также разревать массив и возвращать копию с элемента в аргументе и по какой эл.
const oldArray = ['a', 'b', 'c'];

const newArray = oldArray.slice();
newArray[1] = 'asdasdasdas';


console.log(newArray);
console.log(oldArray);
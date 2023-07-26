"use strict";

// Методы это вспомогательные функции JS, свойства вспомогательные значения
// Методы вызываются как функции метод (), свойства пишуться через точку переменная.свойство
const str = "tEsT";

const arr = [1,2,4,5,6];
console.log(arr.length);

console.log(str[2]);
// Методы изменения регистра  верхний toUpperCase(), нижний toLowerCase()
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Метод определения совпадения значений в строке. indexOf
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

// Метод разделения строки slice(откуда резать, где закочнить резать)
const logg = "Hello world!";

console.log(logg.slice(6));

//Метод substring() возвращает подстроку строки между двумя индексами, 
// или от одного индекса и до конца строки.
console.log(logg.substring(4));


// Math () математический метод, который имеент кучу математический операций
//  (округление, поиск большего и т.д)

const num = 12.12;
console.log(Math.round(num));


// Метод который переводит числов в другую систему изчисления parseInt()
const test = "12.2px";
console.log(parseInt(test));
// Метод parseFloat() - возвращает числов в десятичной системе.
//  Если использовать на строке вернет дробь
console.log(parseFloat(test));



// isNaN() метод возвращает true если принимает неЧисло, и false если число
console.log(isNaN(5));
console.log(isNaN("test"));
"use strict";

// To String - превращаем в строку
// 1)
console.log(typeof String(null)); // строка
console.log(String(null)); // тип налл

// 2)
console.log(typeof (5 + "")); // конкатенация всегда делает строку

const num = 5;
console.log("https://fb.com/catalog/" + num); // динамический каталог
console.log(`https://fb.com/catalog/${num}`); // интерполяция

const fontSize = 26 + "px";

// To Number
// 1)
console.log(typeof Number("4"));

// 2)
console.log(typeof +"5"); // бинарный плюс

// 3)

try {
    let answer = +prompt("Hi, how old are you?", "");
  } catch (err) {
      console.log('Ошибка при работе в ВизуалКод');
  }

// To boolean (true,false)

// 0, '', null, undefined, Nan ;  --- false
// все остальные это true

// 1)
let switcher = null;

if (switcher) {
    console.log("Working");
}

switcher = 1;
if (switcher) {
    console.log("Working");
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"444")); // два знака отрицания переводят в булевое значение


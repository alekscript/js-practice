"use strict"
// alert('Hello')

// alert - всплывающее сообщение браузера


// const result = confirm("Are you ready?");
// // confirm - вопрос пользователю от браузера
// console.log(result);

// const answer = prompt("Вам есть 18", "18");
// console.log(answer);



// typeof - оператор проверки типа данных

// console.log(typeof(answer));

// // Вся информация, которая приходит от пользователя - строка. 
// // Которую можно конвертировать в другие значения.

// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your family name?', '');
// answers[2] = prompt('What is your age?', '');


// console.table(typeof(answers));


// Интерполяция `` косые кавычки, работа переменных в строке

const category = 'toys';

console.log(`https://someurl.com/${category}/5`)

const user = 'Ivan';
alert(`Hello, ${user}`);
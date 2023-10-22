"use strict";

// let number = 5; debugger

// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger


function createCounter() {
    let counter = 0;

    const myFunc = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunc;
}

const increment = createCounter();

const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1,c2,c3);

// Замыкание функции - это функция, которая запоминает свои внешние переменные

{
    let msg = 'Hello';
}

console.log(msg); // ошибка

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3;
    }
    
    console.log(num);
}
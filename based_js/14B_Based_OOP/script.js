"use strict";

let str ="some"; // примитивный тип данных
let strObj = new String(str); // примитив в объект и опять в примитив

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3,4]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello!");
    }
};

const john = {
    health: 100
};

const sam = Object.create(soldier);
// john.__proto__ = soldier; 
// назначаем новому объекту прототип из которого он берет методы и свойства

Object.setPrototypeOf(john, soldier); // новая форма записи


console.log(john.armor); 
console.log(sam.armor); 

john.sayHello();
sam.sayHello();


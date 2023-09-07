"use strict";

function sayHello() {
    console.log('Hello!');
}
sayHello();

function hi() {
    console.log('hi');
}

hi();

const arr = [1,5,13,0,7];

let sortedArr = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}


console.log(sortedArr);
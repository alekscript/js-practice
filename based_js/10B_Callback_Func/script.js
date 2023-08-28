"use strict";

function first() {
  // Do something
  setTimeout(function() {
    console.log(1);
  }, 1500);
}

function second() {
  console.log(2);
}

first();
second();

// callback функция - это функция, которая должна быть выполнена, 
// после выполнения другой

function learnJS(lang, callback) {
  console.log(`I learn: ${lang}`);
  callback();
}

function done(){
  console.log('Я прошел этот урок');
}


learnJS('JS', done);
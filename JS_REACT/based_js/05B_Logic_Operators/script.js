'use strict';


if (4 == 9) { // если условие верное, код в скобках работает, если нет, то нет
  console.log('OK!');
} else {
  console.log('NO!')
}


const num = 50;

if (num < 49) {
  console.log('error');
} else if (num > 100) {
  console.log('more than');
} else {
  console.log('Ok!');
}




(num == 50) ? console.log('OK!') : console.log('Error');




switch (num) {
  case 49:
    console.log('error');
    break;
  case 50:
    console.log('ok');
    break;
  default:
    console.log('no one');
    break;
}



// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//   console.log('Best buy');
// }

// console.log((hamburger && fries));


// всегда означают false  - '', false, NaN, 0, null, undefined 


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
  console.log('Best buy');
} else {
  console.log('Wrong Buy');
}

console.log((hamburger === 3 && cola === 2 || fries === 3 && nuggets === 2));


// console.log( NaN || 2 || undefined ); //2


// console.log( NaN && 2 && undefined ); //NaN


// console.log( 1 && 2 && 3 ); //3


// console.log( !1 && 2 || !3 ); // false


// console.log( 25 || null && !3 ); //25


// console.log( NaN || null || !3 || undefined || 5); //5


// console.log( NaN || null && !3 && undefined || 5); //5


// console.log( 5 === 5 && 3 > 1 || 5); // true


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport );



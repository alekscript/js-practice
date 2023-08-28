"use strict";

let num = 50;

// Цикл While

while (num < 55) {
  console.log(num);
  num++;
}
// Цикл While выполняется, пока выполняются условия в скобках



// Цикол Do While

do {
  console.log(num);
  num++;
}
while (num < 55);

// Цикол Do While в начале отрабатывает хотя бы раз итерацию, а потом проверяет соответствие условию

// Цикл FOR
num = 10;

for (let i = 1; i < 10; i++) {
  if (i === 6) {
    // прерывает цикл, если выполняется условие
    // break;
    // пропускает условие, если оно выполняется и продолжает цикл
    continue;
  }
  console.log(i);
}


for (i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}


// Необходимо создать фигуру треугольника из звездочки
// *
// **
// ***
// ****
// *****
// ******

let result = '';
const row = 7;

for (i = 1; i < row; i++) {
  // формируем строку, количество звезд ограничиваем номером строки
  for (j = 0; j < i; j++) {
    result += "*";
  }

  result += '\n'; //  \n - перенос строки
}

console.log(result);

startCircle: for (i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue startCircle;
      console.log(`Third level: ${k}`);
    }
  }
}

// 1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
function firstTask() {
  // Пишем решение вот тут
  let i = 5;
  do {
    console.log(i);
    i++;
  }
  while (i <= 10)

}

firstTask();

// 2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). 
// Когда цикл дойдет до числа 13 - остановить весь цикл
// Место для второй задачи
function secondTask() {
  // Пишем решение вот тут
  for (let i = 20; i >= 10; i--) {
    if (i === 13) break;
    console.log(i);
  }
}
secondTask();

function thirdTask() {
  // Пишем решение вот тут
  for (let i = 2; i <= 10; i++) {
    if (i % 2 != 0) continue;
    console.log(i);
  }
}
thirdTask();

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}


function fourthTask() {
  // Пишем решение вот тут
  let i = 2;
  while (i <= 16) {
    if (i % 2 === 1) {
      console.log(i);
    }
    i++;
  }

}
fourthTask();


// 5. Заполните массив цифрами от 5 до 10 включительно.
// Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
// Место для пятой задачи

function fifthTask() {
  const arrayOfNumbers = [];

  // Пишем решение вот тут
  for (let i = 5; i < 11; i++){
    arrayOfNumbers[i-5] = i;
  }
  // Не трогаем
  return arrayOfNumbers;

}
fifthTask();


// 1ДОП. Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, 
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// Место для первой задачи
function firstTask1() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  // Пишем решение вот тут
  for (let i = 0; i < arr.length; i++){
    result[i] = arr[i];
  }  
  console.log(result);
  // Не трогаем
  return result;
}
firstTask1();


// 2ДОП. Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// Место для второй задачи
function secondTask2() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  // Пишем решение вот тут
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string'){
      data[i] += ' - done';
    } else {
      data[i] *= 2;
    }
  }
  
  // Не трогаем
  console.log(data);
  return data;
}
secondTask2();

// 3ДОП. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
// Место для третьей задачи
function thirdTask3() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  // Пишем решение вот тут
  let len = data.length;
  for (let i = 1; i <= data.length; i++) {
    result[i-1] = data[len-i];
  }
  // Не трогаем
  console.log(result);
  return result;
}
thirdTask3();


//       *
//      ***
//     *****
//    *******
//   *********
//  ***********

const lines = 5;
result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)
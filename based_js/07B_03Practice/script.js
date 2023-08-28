"use strict";

// Место для первой задачи
function sayHello(arg) {
  return `Привет, ${arg}!`;
}
console.log(sayHello('Антон'));

// Место для второй задачи
function returnNeighboringNumbers(intNum) {
  let myArr = [];
  myArr[0] = intNum - 1;
  myArr[1] = intNum;
  myArr[2] = intNum + 1;
  return myArr;
}

console.log(returnNeighboringNumbers(5));


// 3. Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
// Первое число - это база, второе число - это сколько раз нужно будет повторить 
// это число в прогрессии. (Смотри пример ниже).Функция должна возвращать строку
// (или число в особых случаях, о которых ниже), где эти числа идут по порядку, 
// разделенные тремя дефисами "---".После последнего числа их не должно быть.
// Если второй аргумент не является числом, равен или меньше нуля -
//  то возвращать просто первый аргумент. (Проверяем через оператор typeof)
// Место для третьей задачи

function getMathResult(firstNum, secondNum) {
  let result = '';
  if (typeof secondNum === 'string') {
    return firstNum;
  } else if (secondNum <= 0) {
    return firstNum;
  } else {
    for (let i = 1; i <= secondNum; i++) {
      if (i === secondNum) {
        result += firstNum * i;
      } else {
        result += firstNum * i + '---';
      }
    }
  }
  return result;
}

console.log(getMathResult(5, 10));
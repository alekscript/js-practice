"use strict";
// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба(тоже базовая математика,
//   иногда используется в создании анимаций).Эта функция принимает в себя целое число со значением длины ребра куба.
//   Ответ выведите в формате строки, который изображен в примерах.

// Место для первой задачи
function calculateVolumeAndArea(a) {
  let vol;
  let area;
  if(isNaN(a) || a <= 0 || parseFloat(a) != parseInt(a) || typeof a === 'string') {
    return 'При вычислении произошла ошибка'
  } else {
    vol = a * a * a;
    area = (a * a) * 6;
  }
  return `Объем куба: ${vol}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

function getCoupeNumber(number) {
  if (isNaN(number) || Math.trunc(number) !== number || number < 0) {
      return "Ошибка. Проверьте правильность введенного номера места";
  } else if (number === 0 || number > 36) {
      return "Таких мест в вагоне не существует";
  } else{
      return Math.ceil(number/4);
  }
}
console.log(getCoupeNumber(13));



// Место для второй задачи
// Место для первой задачи
function getTimeFromMinutes(number)  {
  if (number === 0) {
    return  "Это 0 часов и 0 минут";
  } else if(number < 0 || isNaN(number) || parseInt(number) !== number || number === 'string') {
      return "Ошибка, проверьте данные";
  }
  
  let hour = parseInt(number/60);
  console.log(hour);
  let minute = number - (hour * 60);
  console.log(minute)
  let hoursStr = '';

  switch(hour) {
    case 0:
      hoursStr = 'часов';
      break;
    case 1:
      hoursStr = 'час';
      break;
    case 2:
      hoursStr = 'часа';
      break;
    case 3:
      hoursStr = 'часа';
      break;
    case 4:
      houseStr = 'часа';
      breeak;
    case 5:
      hoursStr = 'часов';
      break;
    case 6:
      houseStr = 'часов';
      break;
    case 7:
      hoursStr = 'часов';
      break;
    case 8:
      hoursStr = 'часов';
      break;
    case 9:
      hoursStr = 'часов';
      break;
    case 10:
      hoursStr = 'часов';
      break;
  }

  return `Это ${hour} ${hoursStr} и ${minute} минут`;
}

console.log(getTimeFromMinutes(100));


// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// Место для второй задачи
function findMaxNumber(number1,number2,number3,number4) {
  let maxNumber = 0;
  if(typeof(number1) !== 'number' || typeof(number2) !== 'number' || typeof(number3) !== 'number' || typeof(number4) !== 'number') {
    return 0;
  } else {
    maxNumber = Math.max(number1,number2,number3,number4);
    return maxNumber;
  }
}

console.log(findMaxNumber(1, 5, 6.6, 11)); // 11
console.log((1, 5, '6', '10')); // 0


function fib(num) {
  if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
      return "";
  }

  let result = '';
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
      if (i + 1 === num) {
          result += `${first}`;
          // Без пробела в конце
      } else {
          result += `${first} `;
      }

      let third = first + second;
      first = second;
      second = third;
  }

  return result;
}

fib(5)
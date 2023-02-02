// Операторы сравнения ЗАДАЧИ

if ("0") {
  alert('Привет');
} // true, если был 0, то фолс


let title = prompt("Какое «официальное» название JavaScript?", "Не знаете? ECMAScript!");
if (title == 'ECMAScript') {
  alert('YES');
} else {
  alert('Не знаете? ECMAScript!');
}

let num = prompt("ВВедите число", "Вы не ввели число");

if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}


// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

let a = prompt('Введите число', 1);
let b = prompt('Введите число', 2);
let result = (a + b < 4) ? 'Мало' : 'Много';

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
      '';
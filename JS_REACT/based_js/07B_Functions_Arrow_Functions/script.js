"use strict";

// Функция вызывается ключевым словом function и присваивается ей имя, чтобы она выполнилась
// ее надо вызвать написав имя и круглые скобки, если есть аргументы для функции передаем их в функцию.
let num = 20;
function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(`Вывод num из функции: ${num}`);
}
// Вызов функции для выполнения действий
showFirstMessage("My text");

// выведет глобальную переменную num, из функции не будет видно, так как в функции есть своя переменная
// с областью видимости, только ФУНКЦИЯ.
console.log(`Вывод num как глобальной переменной: ${num}`);


//  В функции можно вернуть определенное значение через ключевое слово return.
// После слова return действия в функции заканчиваются и она прекращает работу.
function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(2, 3));
console.log(calc(6, 3));
console.log(calc(9, 3));



// Функция может присваиваться к переменной - это функциональное выражение. Результат работы функции
// может быть значением переменной. 
function ret() {
  let num = 50;

  //

  return num;
}


const anotherNum = ret ();

console.log(anotherNum);

// Другой вариант записи функционального выражения
const logger = function () {
    console.log("My log");
};

logger();

// Варианты стрелочных функций
// const calc = (a, b) => {return a + b};

// Если функция возвращает простое действие, можно писать в одну строчку без return и { }
// const calc = (a, b) => a + b;

// Для записи больших выражений
// const calc = (a, b) => {
//   console.log("Итог сложения будет:");
//   return a + b;
// };



// Допольнительные знания про аргументы


const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    console.log(curr * amount);
    return (curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);


// Допольнительные знания по return (функция может возвращать результат работы, а может не передавать)



function promotion(result) {
  console.log(`Обмен со скидкой от суммы равен: ${result * discount}`);
}

convert(500, usdCurr);

promotion(convert(500, usdCurr));

const res = convert(500, usdCurr);

promotion(res);

// После return не ставить перенос строки, иначе не сработает то, что надо вернутьЮ, а будет undefined
function test() {
  for (let i = 0; i < 5; i++){
    console.log(i);
    if(i === 3) return;
  }
  console.log('done');
}

console.log(test());

// Все функции в любом случае возвращают значение, если не указан return - она возвращает undefined

function doNothing() {};
console.log(doNothing() === undefined);
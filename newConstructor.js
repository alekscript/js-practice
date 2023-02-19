//Возможно ли создать функции A и B, чтобы new A() == new B()?

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true
//Если функция возвращает объект, то new вернёт его вместо this.
//Таким образом, они могут, к примеру, возвращать один и тот же внешне определённый объект obj


// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//     sum() возвращает сумму этих свойств.
//     mul() возвращает произведение этих свойств.

function Calculator() {
  this.read = function() {
    this.a = prompt('Vvedite A', 0);
    this.b = prompt('Vvedite B', 0);
  }

  this.sum = function() {
    return alert(this.a + this.b);
  }

  this.mul = function() {
    return alert(this.a*this.b);
  }
}

let calculator = new Calculator();
    calculator.read();

alert("Sum= " + calculator.sum());
alert("Mul= " + calculator.mul());

// Создайте new Accumulator
// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
//     Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//     Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('Vvedite value, которое надо добавить к стартовому числу?', 0);
    return this.value;
  }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.read();

// Создайте объект calculator (калькулятор) с тремя методами:
//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//     sum() (суммировать) возвращает сумму сохранённых значений.
//     mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('Enter the nubmer A', 0); // ставим + перед вызовом, чтобы привести к числу
    this.b = +prompt('Enter the number B', 0);// ставим + перед вызовом, чтобы привести к числу
  },
}

calculator.read(); // получаем два числа
alert(calculator.sum());  // из чисел полученных выше - делаем суммирование
alert(calculator.mul()); // умножаем полученные числа

// Цепи вызовов 
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () { // показывает текущую ступеньку
    alert(this.step);
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0



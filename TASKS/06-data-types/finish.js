/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

let myString = 'Alex'
let myNumber = 10
let myBoolean = true
let myNull = null
let myUndefined
let myObject = {
  width: 10,
  name: 'Alex',
  profession: 'Developer'
}
let myArray = [10,5,6,3]

console.log(typeof(myString))
console.log(typeof(myNumber))
console.log(typeof(myBoolean))
console.log(typeof(myNull))
console.log(typeof(myUndefined))
console.log(typeof(myObject))
console.log(typeof(myArray))

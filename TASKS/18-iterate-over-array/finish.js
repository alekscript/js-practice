/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */

const myArr = [0,1,2,3,4,5]

// функциональное выражение в коллбек функции
myArr.forEach(function(el){
  console.log(el)
})

// стрелочная функция коллбек одной строкой
myArr.forEach(el => console.log(el*2))
let myVar = 0
let Arr = []
// стрелочная функция коллбек
myArr.forEach(el => {
  myVar = el *2
  Arr.push(myVar)
})

console.log(Arr)

const newArr = myArr.map(el => el*3)

console.log(newArr)


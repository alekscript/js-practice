/** ЗАДАЧА 16 - Создание массива
 *
 * 1. Создайте массив с тремя элементами разных типов
 *
 * 2. Выведите в консоль первый элемент массива
 *
 * 3. Выведите в консоль длину массива
 */

// Решение
const myArray = ['Alex', 'Piatopal', 32]

console.log(myArray[0])
console.log(myArray.length)


// Практика
const myArr = [1, true, 'a', 4]

console.log(myArr)
console.log(myArr[0])
console.log(myArr[1])
console.log(myArr[2])
console.log(myArr.length)

myArr[2] = 'abc'

console.log(myArr)

myArr[4] = true
console.log(myArr)
console.log(myArr.length)
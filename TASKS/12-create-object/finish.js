/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */


const myArray = [1,2,'Alex']

console.table(myArray)
console.table(myArray.length)

const myArray2 = [1,2,'Alex']


if(myArray === myArray2) {
  console.log('Одинаковы')
} else {
  console.log('Разные')
}

const myArray3 = myArray

if(myArray === myArray3) {
  console.log('Одинаковы')
} else {
  console.log('Разные')
}


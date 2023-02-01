let a = 5 > 4;
console.log(a); //true

let pineapple = "ананас" > "яблоко";
console.log(pineapple); // false "яблоко" больше чем "ананас"

let b = "2" > "12";
console.log(b); //true так как строчное сравнение, лексиграфическое значение 2 больше 1

console.log(undefined == null);  // true при прямом строгом значении равны

console.log(undefined === null);  // false при сравнение типов - разные

console.log(null == "\n0\n"); // false null != "0"

console.log(null === +"\n0\n"); //false null != 0


// 1. Очевидно, true.
// 2. Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
// 3. Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
// 4. Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
// 5. Строгое сравнение разных типов, поэтому false.
// 6. Аналогично (4), null равен только undefined.
// 7. Строгое сравнение разных типов.

// a = 1, b = 1;

// c = ++a; // 2
// d = b++; // 1
// console.log(c);
// console.log(d);


// let a = 2;

// let x = 1 + (a *= 2); // 5
// console.log(x);

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // добавляем плюс, чтобы привести к числу, а не строке

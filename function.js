// // Task 1

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Родители разрешили?');
// }
// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// function checkMin(a,b) {
//   if ( a < b) {
//     return a;
//   } else if (b < a) {
//     return b;
//   } else {
//     return 'Ravny';
//   }

//   // return a < b ? a : b;
// }

let x = prompt('Vvedite X');
    let n = prompt('Vvedite N');
    function calcPow(x, n) {
      let result = x;
      for (let i = 1; i < n; i++) {
        result *= x;
      }
      return alert(result);
    }
    calcPow(x, n);

  function printMyName() {
    console.log('Aleks')
  }
  setTimeout(printMyName, 1000)
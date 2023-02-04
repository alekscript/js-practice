function litres(time) {
  return Math.trunc(time/2);
}

function repeatStr (n, s) {
  let result = '';
  for ( let i = 0; i < n; i++) {
    result+=s;
  }
  return result;
}

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

function grow(x){
  let result = 1;
  for ( let i =0; i < x.length; i++ ){
    result *= x[i];
  }
  return result;
}
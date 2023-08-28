"use strict";

const family = [];

function showFamily(arr) {
  let str = "Семья состоит из:";
  if (arr.length === 0) {
    str = "Семья пуста";
  } else {
    arr.forEach(function (item) {
      str += ` ${item}`;
      console.log(str);
    });
  }

  return str;
}

console.log(showFamily(family));

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  for (let key of arr) {
    console.log(key.toLowerCase());
  }
}

standardizeStrings(favoriteCities);

const someString = "This is some strange string";

function reverse(str) {
  if(typeof(str) !== 'string') {
      return "Ошибка!";
  } else {
          let newStr = str.split(' ');
  console.log(newStr);
  // сделали массив из слов
  newStr.reverse();
  console.log(newStr);
  let strReverse = '';
  let word = '';
  let wordReverse ='';

  for (let keyitem of newStr) {
    word = keyitem.split('');
    word.reverse();
    wordReverse = word.join('');
    console.log(wordReverse);
    strReverse += `${wordReverse} `
  }
  strReverse = strReverse.trim();
  return console.log(strReverse);
  }
}

reverse(someString);


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = "Нет доступных валют" : str = `Доступные валюты:\n`;
    
    arr.forEach(function(curr, i) {
       if(curr !== missingCurr) {
        str += `${curr}\n`;
       }
    });
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

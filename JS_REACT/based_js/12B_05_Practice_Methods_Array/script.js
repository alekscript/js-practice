"use strict";

const family = [];

function showFamily(arr) {
  let str = "Семья состоит из:";
  if( arr.length === 0) {
    str = 'Семья пуста';
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

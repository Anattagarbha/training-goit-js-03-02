/* дополни код функции так, чтобы она возвращала новый массив matches, 
в котором будут только те аргументы, начиная со второго, которые 
есть в массиве первого аргумента */

"use strict";

function findMatches(arr, ...args) {
  const matches = [];
  for (const val of args) {
    if (arr.includes(val)) {
      matches.push(val);
    }
  }
  return matches;
}

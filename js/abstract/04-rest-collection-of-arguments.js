/* операция ... (rest) позволяет собрать группу 
независимых элементов в новую коллекцию  */

"use strict";

function multiply(...args) {
  console.log(args);
}

// сбор части аргументов функции

function add(first, second, ...args) {
  console.log(first, second, args);
}

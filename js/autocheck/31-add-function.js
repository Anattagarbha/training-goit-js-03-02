/* используя операцию rest дополни код функции add() так, чтобы она 
принимала любое количество аргументов, считала и возвращала их сумму */

"use strict";

function add(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

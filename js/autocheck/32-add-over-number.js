/* измени параметры и тело функции addOverNum() так, 
чтобы она считала сумму только тех аргументов, которые 
больше чем заданное число */

"use strict";

function addOverNum(max, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > max) {
      total += arg;
    }
  }
  return total;
}

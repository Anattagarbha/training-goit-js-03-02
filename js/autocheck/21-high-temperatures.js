/* замени объявления переменных yesterday, today и tomorrow 
одной операцией деструктуризации свойств объекта highTemperatures */

"use strict";

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday, today, tomorrow } = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature);

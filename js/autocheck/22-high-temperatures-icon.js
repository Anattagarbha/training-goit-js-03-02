/* задай значение по умолчанию для icon - строку 
"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" */

"use strict";

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature);

console.log(highTemperatures);

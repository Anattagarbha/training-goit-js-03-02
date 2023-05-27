/* замени объявления переменных todayLow, todayHigh, 
tomorrowLow и tomorrowHigh одной операцией деструктуризации 
свойств объекта forecast */

"use strict";

function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

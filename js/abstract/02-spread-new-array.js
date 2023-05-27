/* операция ... (spread) позволяет создать копию массива 
или «склеить» произвольное количество массивов в один новый */

"use strict";

const temps = [14, -4, 25, 8, 11];

const copyOfTemps = [...temps];

console.log(copyOfTemps);

// glue the arrays

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];

const allTemps = [...lastWeekTemps, ...currentWeekTemps];

console.log(allTemps);

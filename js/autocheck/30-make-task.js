/* функция должна составить и вернуть новый объект 
задачи, не изменяя напрямую параметр data  */

"use strict";

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  return { ...{ completed, category, priority }, ...data };
}

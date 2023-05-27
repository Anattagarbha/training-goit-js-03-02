/* добавь объекту atTheOldToad метод getPotions(), 
который просто возвращает значение свойства potions */

"use strict";

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  getPotions() {
    return this.potions;
  },
};

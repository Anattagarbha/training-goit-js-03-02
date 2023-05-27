/* дополни метод removePotion(potionName) так, чтобы он 
удалял зелье potionName из массива зелий в свойстве potions */

"use strict";

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    const potionIdx = this.potions.indexOf(potionName);
    this.potions.splice(potionIdx, 1);
  },
};

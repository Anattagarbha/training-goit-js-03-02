"use strict";

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    const potionIdx = this.potions.indexOf(oldName);
    this.potions.splice(potionIdx, 1, newName);
  },
};

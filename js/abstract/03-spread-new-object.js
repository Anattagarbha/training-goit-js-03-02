/* операция ... (spread) позволяет распылить свойства 
произвольного количества объектов в один новый */

"use strict";

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };

const third = { ...first, ...second };

console.log(third);

// порядок распыления имеет значение

const forth = { ...second, ...first };

console.log(forth);

// свойства распыляемого объекта могут перезаписать
// значение уже существующего свойства

const fifth = { ...third, ...forth };
console.log(fifth);

// во время распыления можно добавлять
// свойства в произвольное место

const sixth = { propD: 99, ...third, ...forth };
console.log(sixth);

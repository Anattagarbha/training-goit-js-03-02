/* деструктуризирующее присваивание можно использовать 
и для массивов, но с некоторыми особенностями */

// вместо фигурных скобок {} используются квадратные []

// переменным, указанным в квадратных скобках [],
// будут последовательно присваиваться значения элементов массива

"use strict";

const rgb = [200, 255, 100];

const [red, green, blue] = rgb;

console.log(`R:${red}, G:${green}, B:${blue}`);

/* если переменных больше чем элементов массива, 
им будет присвоено undefined, поэтому можно указывать 
значения по умолчанию */

const rgba = [200, 255, 100];

const [redColor, greenColor, blueColor, alpha = 0.3] = rgba;

console.log(`R:${redColor}, B:${blueColor}, 
G:${greenColor}, A:${alpha}`);

/* Иногда из массива необходимо деструктуризировать 
только первые N элементов, а остальные сохранить 
в одну переменную в виде массива */

const rgbRest = [200, 255, 100];

const [redValue, ...colors] = rgbRest;

console.log(red, colors);

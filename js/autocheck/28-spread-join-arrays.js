/* Используя распыление дополни код так, чтобы:

в переменной allScores хранился массив всех результатов от первой до третьей группы
в переменной bestScore был самый высокий общий балл
в переменной worstScore был самый низкий общий балл */

"use strict";

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(bestScore, worstScore);

/* для того, чтобы сократить количество повторений 
можно деструктуризировать свойства объекта в локальные 
переменные в теле цикла */

"use strict";

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
];

for (const book of books) {
  const { title, author, rating } = book;
  console.log(title, author, rating);
}

// деструктуризацию можно выполнить прямо
// в месте объявления переменной book

for (const { title, author, rating } of books) {
  console.log(title, author, rating);
}

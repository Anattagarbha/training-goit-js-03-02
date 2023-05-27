/* деструктуризация позволяет «распаковать» значения 
свойств объекта в локальные переменные */

"use strict";

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const { title, author, genres, isPublic, rating } = book;

const accsessType = isPublic ? "публичном" : "закрытом";

const message = `Книга автора ${author} с рейтингом 
${rating} на ходится в ${accsessType} доступе!`;

console.log(message);

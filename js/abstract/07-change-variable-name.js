/* при деструктуризации можно изменить имя переменной,
в которую распаковывается значение свойства */

"use strict";

const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const { title: firstTitle, coverImage: firstCoverImage } = firstBook;

console.log(firstTitle, firstCoverImage);

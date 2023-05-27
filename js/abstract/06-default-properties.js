/* для того, чтобы избежать присвоения undefined 
при деструктуризации несуществующих свойств объекта, 
можно задать переменным значения по умолчанию */

"use strict";

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

const {
  title,
  author,
  coverImg = "https://via.placeholder.com/640/480",
} = book;

console.log(title, author, coverImg);

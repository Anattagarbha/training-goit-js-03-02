/* если функция принимает более двух-трёх аргументов, 
очень просто запутаться в какой последовательности, что 
передавать. В результате получается очень неочевидный 
код в месте её вызова */

/* паттерн «объект параметров» помогает решить эту проблему, 
заменяя набор параметров всего одним - объектом 
с именованными свойствами */

"use strict";

function doStuffWithBook(book) {
  console.log(book.title, book.numberOfPages);
}

doStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});

// можно деструктуризировать объект параметра book в теле функции

function doMoreStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;
  console.log(title, numberOfPages);
}

doMoreStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});

// или в сигнатуре функции

function doEvenMoreStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title, numberOfPages);
}

doEvenMoreStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});

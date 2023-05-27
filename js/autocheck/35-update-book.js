/* дополни метод updateBook(oldName, newName) так, чтобы он 
изменял название книги с oldName на newName в свойстве books */

"use strict";

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    const bookIdx = this.books.indexOf(oldName);
    this.books.splice(bookIdx, 1, newName);
  },
};

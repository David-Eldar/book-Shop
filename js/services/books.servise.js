"use strict";
const STORAGE_KEY = "bookDB"
const PAGE_SIZE = 5;

const gTitles = [
  "12 Ruls for life",
  "Shogun",
  "The Four Agreements",
  "Consciousness Engineering Workshop",
];
const gAuthors = [
  "Jordan B Peterson",
  "Jameas Clavel",
  "Don Miguel Rulz",
  "Hanan Amior",
];

var gBooks


function getBooks() {
  return gBooks
}

function createBooks() {
  _createBooks()
}

function _createBooks() {
  var books = loadFromStorage(STORAGE_KEY)
  // if there are no items in storage - generate demo data
  if (!books || !books.length) {
    books = []

    for (let i = 0; i < 4; i++) {
      var title = gTitles[i]
      var author = gAuthors[i]
      var imgUrl = `img/${i}.jpeg`
      books.push(_createBook(title, author, imgUrl))
    }
  }
  gBooks = books;
  console.log('gBooks:', gBooks)
  _saveBooksToStorage()
}

function _createBook(title, author, imgUrl) {
  return {
    id: makeId(),
    title,
    author,
    price: getRandomIntInclusive(50, 250),
    imgUrl,
  };
}

function _saveBooksToStorage() {
  saveToStorage(STORAGE_KEY, gBooks)
}

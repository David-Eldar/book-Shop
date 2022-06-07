"use strict";

function onInit() {
  createBooks();
  renderShop();
}

function renderShop() {
  const books = getBooks();

  const strHTML = books.map((book) => {
    console.log("gB:", gBooks);
    return `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td> <img src="/${book.imgUrl}"/></td>
        <td>${book.price}</td>
           <td>
           <button class="read" onclick="onRead('${book.id}')">Read</button>
           <button class="update onclick="onUpdate('${book.id}')">Update</button>
           <button class="delete onclick="onDelete('${book.id}')">Delete</button>
           </td>
        </tr>`
  })

  const elTable = document.querySelector(".books-table");
  elTable.innerHTML = strHTML.join("");
}

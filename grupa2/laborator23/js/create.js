import {createBook} from "./controllers/bookController.js";

const formElement = document.querySelector("#add_book");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const book = {
        "title": e.target.title.value,
        "author": e.target.author.value,
        "pages": e.target.pages.value,
        "description": e.target.description.value,
    }
    createBook(book);
    window.location.href = "index.html";
});
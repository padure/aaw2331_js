import { addBook } from "./bookController.js";

const formBookElement = document.querySelector("#add_book");

formBookElement.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const book = {
        "title": e.target.title.value,
        "author": e.target.author.value,
        "pages": e.target.pages.value,
        "description": e.target.description.value
    }
    
    if(!book.title || !book.author || !book.pages || !book.description){
        alert("Toate campurile sunt obligatorii");
        return;
    }

    try {
        await addBook(book);
        window.location.href = "index.html";    
    } catch (error) {
        console.error(error);
    }
});
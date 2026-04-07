import { buildCard } from "./ui/components.js";
import { getBooks } from "./controllers/bookController.js";

const booksElement = document.querySelector("#books");

const render = async () => {
    const books = await getBooks();
    books.forEach(book => booksElement.innerHTML += buildCard(book));
}

render();
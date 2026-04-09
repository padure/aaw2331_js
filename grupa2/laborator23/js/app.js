import { buildCard } from "./ui/components.js";
import { getBooks, deleteBook } from "./controllers/bookController.js";

const booksElement = document.querySelector("#books");

const render = async () => {
    const books = await getBooks();
    books.forEach(book => booksElement.innerHTML += buildCard(book));
    const btnDeleteElements = document.querySelectorAll(".btn-delete");
    
    btnDeleteElements.forEach( btn => btn.addEventListener("click", async function(e){
        const id = this.dataset.id;
        const confirmDelete = confirm("Esti sigur?");
        
        if(!confirmDelete){
            return;
        }

        try {
            await deleteBook(id);
            await render();
            alert("Ai sters o carte cu succes!");
        } catch (error) {
            console.error(error);
        }
    }));
}

render();
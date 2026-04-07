const URL_BOOKS = `http://localhost:3000/books`;

// Get all books from BD: db.json
export const getBooks = async () => {
    const res = await fetch(URL_BOOKS);
    const books = await res.json();
    return books;
}

export const getBookByID = async (id) => { }
//Add book to DB: db.json
export const createBook = async (book) => {
    const response = await fetch(URL_BOOKS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
    });
}
export const updateBook = async (id) => { }
export const deleteBook = async (id) => { }
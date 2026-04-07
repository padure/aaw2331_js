const BOOK_URL = `http://localhost:3000/books`;

export const getBooks = async () => {
    const res = await fetch(BOOK_URL);
    const books = await res.json();
    return books;
} 
export const getBookByID = async (id) => {} 
export const addBook = async () => {} 
export const deleteBook = async (id) => {} 
export const updateBook = async (id) => {} 
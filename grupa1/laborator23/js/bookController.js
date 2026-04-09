const BOOK_URL = `http://localhost:3000/books`;

const validateResponse = async (response) => {
    if(!response.ok){
        throw new Error(`Eroare HTTP: ${response.status}`);
    }

    if(response.status === 204){
        return null;
    }

    return await response.json();
}

export const getBooks = async () => {
    const res = await fetch(BOOK_URL);
    const books = await res.json();
    return books;
}
export const getBookByID = async (id) => { }

export const addBook = async (book) => {
    const response = await fetch(BOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
    });
    return await validateResponse(response);
}

export const deleteBook = async (id) => { }
export const updateBook = async (id) => { } 
const URL_BOOKS = `http://localhost:3000/books`;

const responseValidate = async (response) => {
    if(!response.ok){
        throw new Error(`Erroare de tip HTTP: ${response.status}`);
    }

    if(response.status == 204){
        return null;
    }

    return await response.json();
}

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
    
    return await responseValidate(response);
}
export const updateBook = async (id) => { }
//Delete a Book
export const deleteBook = async (id) => {
    const response = await fetch(`${URL_BOOKS}/${id}`, {
        method: "DELETE"
    });
    
    return await responseValidate(response);
}
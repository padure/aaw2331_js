export const buildCard = (book) => {
    return `<div class="flex-1 basis-[30%] min-w-[250px] bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition duration-300">
        <!-- Titlu -->
        <h2 class="text-xl font-bold text-gray-800 mb-2">
            ${book.title}
        </h2>
        <!-- Autor -->
        <p class="text-sm text-gray-500 mb-3">
            de <span class="font-medium text-gray-700">${book.author}</span>
        </p>
        <!-- Descriere -->
        <p class="text-gray-600 text-sm mb-4">
            ${book.description}
        </p>
        <!-- Informații -->
        <div class="flex items-center justify-between text-sm text-gray-500">
            <span>${book.pages} pagini</span>
        </div>
        <!-- Butoane -->
        <div class="flex items-center justify-between text-sm mt-4">
            <a href="edit.html?id=${book.id}" 
               class="px-2 py-1 bg-gray-800 text-gray-100 rounded hover:bg-gray-700 transition">
               Edit
            </a>
            <button 
                class="px-2 py-1 bg-red-800 text-gray-100 rounded hover:bg-red-700 transition btn-delete"
                data-id="${book.id}">
                Delete
            </button>
        </div>
    </div>`;
}

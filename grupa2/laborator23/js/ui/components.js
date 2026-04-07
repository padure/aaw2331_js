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
    </div>`;
}

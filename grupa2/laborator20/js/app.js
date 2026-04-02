const cards = document.querySelectorAll(".card");
const clearElement = document.querySelector("#clear");
const doubleElement = document.querySelector("#double");

//Functions
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

//Main section
//Display numbers
cards.forEach( card => {
    card.addEventListener("click", function(){
        cards.forEach( card => card.classList.remove("bg-teal-700") );
        this.classList.add("bg-teal-700");
        this.textContent = getRandomNumber();
        const totalElement = document.querySelector("#total");
        const cardsData = [...cards].map( card => Number(card.textContent) );
        const total = cardsData.reduce( (acc, val) => acc + val, 0);
        totalElement.textContent = `Total: ${total}`;
    });
});

//Events
// Clear display
clearElement.addEventListener("click", () => {
    cards.forEach( card => card.classList.remove("bg-teal-700") );
    document.querySelector("#total").textContent = `Total: 0`;
    cards.forEach( card => card.textContent = "" );
});
//Double data
doubleElement.addEventListener("click", () => {
    cards.forEach( card => {
        const number = Number(card.textContent)
                ? Number(card.textContent) * 2
                : "";
        card.textContent = number;
    } );
});
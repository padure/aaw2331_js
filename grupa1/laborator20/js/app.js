const cards = document.querySelectorAll(".card");
const totalElement = document.querySelector("#total");

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

cards.forEach( card => {
    card.addEventListener("click", function(e){
        cards.forEach(el => el.classList.remove("bg-slate-700"));
        this.classList.add("bg-slate-700");
        this.textContent = getRandomNumber();
        // Extragel o lista cu numerele cardurilor
        const cardsNumber = [...cards].map( card => Number(card.textContent) );
        // Calculam totalul numerelor cardului
        const total = cardsNumber.reduce( (acc, val) =>  val + acc, 0);
        totalElement.textContent = `Total: ${total}`;
    });
});

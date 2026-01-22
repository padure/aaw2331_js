let condition = true;
let contor = 0;

while (condition) {
    let userNumber = Number(prompt("Scrie un numar de la 1 - 10!"));
    let randomNumber = Math.floor(Math.random() * 10 + 1);

    let isEqual = userNumber == randomNumber;

    if (isEqual) {
        alert(`Felicitari ai GHICIT, numarul este ${randomNumber}!`);
        contor++;
    } else {
        condition = confirm("Ai gresit. Mai incearca!");
    }
}

alert(`Final! Ai ghicit de ${contor} ori!`);
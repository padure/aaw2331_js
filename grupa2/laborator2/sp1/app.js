let stare = true;
let count = 0;

while (stare){
    let userNumber = Number( prompt("Scrie un numar:") );
    let randomNumber = Math.floor( Math.random() * 10) + 1;
    
    let isEqual = userNumber == randomNumber;
    
    if(isEqual){
        count++;
        stare = confirm(`Felicitari ai ghicit numarul ${randomNumber}. Continuati?`);
    } else{
        alert(`Ai gresit numarul a fost ${randomNumber}!`);
    }
}

alert(`Ai ghicit de ${count} ori!`);

// let nr1 = prompt("Scrie primul numar:");
// let nr2 = prompt("Scrie al doilea numar:");

// let suma = Number(nr1) + Number(nr2);

// console.log(nr1 + "+" + nr2 + "=" + suma);
// console.log(`${nr1} + ${nr2} = ${suma}`);

let stare = confirm("Doresti sa accesezi site-ul ca utilizator autentificat?");

let userName = stare
                ? prompt( "Scrie numele:" )
                : "Oaspete";

alert("Ai fost autentificat cu numele de: " + userName);
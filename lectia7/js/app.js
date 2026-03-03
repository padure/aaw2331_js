// setTimeout - Se executa dupa un timp

// const timer = setTimeout(()=>{
//     console.log("M-am executat peste 10 secunde");
// }, 10000);

// setTimeout( () => {
//     clearTimeout(timer);
//     console.log("Am oprit actiunea!");
// }, 5000 );

// const display = () => {
//     console.log("Text!");
// }

// setTimeout( display, 3000 );

// setInterval

// let count = 0;
// const timer = setInterval(()=>{
//     count++;
//     console.log(`Valoarea este: ${count}`);
// }, 3000);

// setTimeout(() => clearInterval(timer), 10000);

const hoursElement   = document.querySelector(".h");
const minutesElement = document.querySelector(".m");
const secondsElement = document.querySelector(".s");

setInterval( () => {
    const data = new Date();
    let h = data.getHours().toString().padStart(2, '0');
    let m = data.getMinutes().toString().padStart(2, '0');
    let s = data.getSeconds().toString().padStart(2, '0');

    hoursElement.textContent    = `${h}`;
    minutesElement.textContent  = `${m}`;
    secondsElement.textContent  = `${s}`;
}, 1000 );
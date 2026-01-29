// For 30 - 60
// for(let i=30; i<=60; i++){
//     let className = (i % 2 == 0) ? "par":"impar";
//     document.body.innerHTML += `<div class="cerc ${className}">${i}</div>`;
// }

//while
// let i = 30;
// while(i<=60){
//     let className = (i % 2 == 0) ? "par":"impar";
//     document.body.innerHTML += `<div class="cerc ${className}">${i}</div>`;
//     i++;
// }

// for(let i = 0; i <= 100; i++){
//     if(i == 40) break;
//     console.log(i);
// }

// let i = 1;

// while (i <= 50) {
//     let condition = Math.sqrt(i) == parseInt(Math.sqrt(i));
//     if( condition ) console.log(i);
//     i++;
// }

// let number = 2027;
// let suma = 0;
// let cifra;

// while (number != 0) {
//     cifra = number % 10;
//     suma += cifra;
//     number = parseInt(number / 10);
// }

// console.log(suma);

// const numere = [ 78, 7, 1, 54, 159, 10, 7 ];

// for(let i = 0; i < numere.length; i++){
//     if( (i % 2 != 0) && (numere[i] > 50 ) ){
//         console.log(numere[i], i);
//     }
// }

const user = {
    name: "John Doe",
    email: "jd@gmail.com",
    city: "Cahul",
    tf: "079452187",
    language: ["ro", "en", "ru"]
}
// console.log(user["city"]);

// const userKeys = Object.keys(user);

// for(let i = 0; i < userKeys.length; i++){
//     console.log(user[`${userKeys[i]}`]);
// }
const users = [
    { name: "Bernice Nolan", city: "Port Sarah", salary:  171.00},
    { name: "Essie Nader", city: "Covina", salary:  331.00},
    { name: "Alberto Jacobi", city: "West Clinton", salary:  591.00},
    { name: "Mandy Maggio", city: "Milford", salary:  898.00},
    { name: "Ignacio Bernhard", city: "Port Jeramyview", salary:  378.00}
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);    
}







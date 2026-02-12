const numbers = [15, [0], [7, 1, [1, [15], 1]], 14];
const newNumbers = numbers.flat(Infinity);
const users = ["John Doe", "Will Smith", "Iulia Mac", "John Doe"];

// let index = users.lastIndexOf("John Doe");
let nr = [];
for(let i = 0; i < 10; i++){
    nr.push(i);
}

// console.log(Array.of(nr));
const valori = [3, 6, 4, 1, 18];

// const condition = valori.every( nr => nr >= 0 );

// const newValori = valori.find( n => n > 5 );
// const newValori = valori.findIndex( n => n > 5 );
// const newValori = valori.filter( n => n > 5 );

// let condition = valori.includes(8);

const it = valori.entries();

// for(let i = 0; i < valori.length; i++){
//     console.log(it.next().value);
// }

const cart = [
    {id: 157, name: "Laptop",   price: 25478, quantity: 1},
    {id: 254, name: "Casti",    price: 527,   quantity: 2},
    {id: 147, name: "Geanta",   price: 2500,  quantity: 1},
    {id: 981, name: "Covoras",  price: 300,   quantity: 3},
    {id: 111, name: "Mouse",    price: 270,   quantity: 5},
];

// const total = cart.reduce( (acc, val) => {
//     return acc += (val.price * val.quantity);
// }, 0 );

// const newCart = cart.filter( product => (product.quantity > 1) && (product.quantity < 5) );

// console.log(newCart);


// cart.forEach( p => console.log(p.name));

const cartWith15 = cart.map( p => {
    return {...p, price: p.price + p.price * 0.15}
} );

console.log(cartWith15);
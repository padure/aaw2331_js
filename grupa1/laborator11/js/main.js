//Problema 28
const city = {
    nume: "Cahul",
    populatie: 35000,
    regiune: "Sud"
}

let { nume, populatie, regiune } = city;

// console.log(nume, populatie, regiune);

//Problema 29

const cityInfo = ({nume, populatie, regiune}) => {
    return `Numele orasului este: ${nume}, are un numar a populatiei de: ${populatie} ;i se afla in regiunea de: ${regiune}`;
}

// console.log( cityInfo(city) );

//Problema 30

let numeOras = nume;
let regiuneOras = regiune;

console.log(numeOras, regiuneOras);

//Problema 31

const books = [
    {titlu: "Javascrip de la 0 la avansat!", autor: "John Doe", pagini: 257},
    {titlu: "Frontend-ul aplicatiilor secolului XXI!", autor: "John Doe", pagini: 314},
];

let [book1, book2] = books;

let { titlu, autor, pagini } = book1;

console.log(titlu, autor, pagini);

//Problema 32
const car = {
    brand: "Dacia",
    model: "Stepway",
    year: 2022,
    engine: {
        type: "Diesel",
        size: 2.0
    }
};

let {type, size} = car.engine;

console.log(type, size);

//Problema 33
const concatUnique = (list1, list2) => {
    // const list = [...list1, ...list2];
    // const result = [];
    
    // for (let i = 0; i < list.length; i++) {
    //     if(!result.includes(list[i])) result.push(list[i]);        
    // }

    // return result;
    return [... new Set([...list1, ...list2]) ];
}

console.log( concatUnique([1, 2, 3, 4], [1, 2, 5]) );

//Problema 34
const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const pers1 = { nume: "KY", age: 25, city: "NY" };
const pers2 = { nume: "JO", email: "jo@gmail.com" };

console.log( mergeObjects(pers1, pers2) );

//Problema 35
const maxim = list => Math.max(...list);


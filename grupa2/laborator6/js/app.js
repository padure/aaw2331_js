//Problema 6
let str = "Dolores tempora.";

const reverseString = (str) => {
    // let = resultat = "";
    // for(let i = str.length - 1; i >= 0; i--){
    //     resultat += str[i];
    // }
    // return resultat;
    return [...str].reverse().join("");
}

const getFibonacciNumber = (n) => {
    if(n <= 1) return n;
    return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
}

const fibonacci = (n, callback) => {
    const numbers = [];
    for(let i = 0; i < n; i++){
        numbers.push(callback(i));
    }
    return numbers;
} 

// console.log(fibonacci(3, getFibonacciNumber));

const isPalindrome = (text, callback) => {
    return (String(text) == callback(String(text))) ? true : false;
}

// console.log(isPalindrome(1002, reverseString));
// console.log(isPalindrome(1001, reverseString));

const numere = [12, 2, 23, 4, 1, 15, 6, 7, 12];

const sumArray = (sir) => {
    // let suma = 0;
    // for(let i = 0; i < sir.length; i++){
    //     suma += sir[i];
    // }
    // return suma;
    return sir.reduce((nr, suma) => suma += nr, 0);
}

// console.log(sumArray(numere));

const average = (lista) => {
    // let suma = 0;
    // for(let i = 0; i < lista.length; i++){
    //     suma += lista[i];
    // }
    // return suma / lista.length;
    return lista.reduce( (n, suma) => suma += n, 0 ) / lista.length;
}

// console.log( average(numere) );

const filterArray = (lista, x) => {
    // let result = [];
    // for(let i = 0; i < lista.length; i++){
    //     if(lista[i] > x) result.push(lista[i]);
    // }
    // return result;
    return lista.filter( number => number > x );
}

console.log(filterArray(numere, 5));


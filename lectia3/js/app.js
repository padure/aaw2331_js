// // Declarative

// const salut = (name = "John Doe", email = "jd@gmail.com") => {
//     console.log(`Salut, ${name}, email-ul tau este: ${email}`);
// }

// salut();
// salut('Gheorghe', 'padure@gmail.com');
// salut('Ion', 'ion@gmail.com');

// const message = hello => {
//     hello("Alin", "al@gmail.com");
// }

// message(salut);
// message(()=>console.log("Test"));
// message(()=>console.log("Conexiune"));
// message(function(){console.log("Extern")});

// (()=>{ console.log("Anonim"); })();


// ( () => {
//     console.log("sdsdsd");
// })();

// const text = () => {
//     return () => {
//         return () => {
//             console.log("Sunt aici!");
//         }
//     }
// }

// text()()();

//Problema 1
const calculateSum = (nr1, nr2) => nr1 + nr2; 
const result = calculateSum(4, 7);
console.log(result);

//Problema 2
const convertToCelsius = (temp) => {
    return ((temp - 32) / 1.8).toFixed(1);
}

const tempInCelsius = convertToCelsius(76);
console.log(tempInCelsius);

//Problema 3
const greatest = list => {
    // let max = list[0];
    // for(let i = 1; i < list.length; i++ ){
    //     if(list[i] > max) max = list[i];
    // }
    // return max;
    // return list.sort( (a, b) => b - a ).shift();
    return Math.max(...list);
}

const max = greatest([54, 78, 1 ,4, 125, 5, 54]);
console.log(max);
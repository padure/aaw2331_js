import {arr1, frontend, backend, user} from "./data.js";

const arr2 = arr1;

arr1.push(4);

// console.log(arr1);
// console.log(arr2);

let a = 159;
let b = a;

a += 1;

// console.log(a);
// console.log(b);

//Spread -> ...


let [item1, ...rest] = frontend;

const fullstack = [...frontend, ...backend, "C#"];
// fullstack.push("C#");
// console.log(item1);
// console.log(rest);
// console.log(fullstack);

let name = "Will";



let {name:userName, age, city = "Cahul"} = user;

console.log(userName);
// console.log(age);
// console.log(city);

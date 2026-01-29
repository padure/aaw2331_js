// else - if
let state = "ploaie";

// if (state == "soare") {
//     console.log("Zi cu soare!");
// } else if(state == "ploaie") {
//     console.log("Zi cu ploaie!");
// } else if(state = "ceata"){
//     console.log("Zi cu ceata!");
// } else {
//     console.log("Aceasta optiune nu se regaseste!");
// }

// switch
// switch (state) {
//     case "soare":
//         console.log("Zi cu soare!");
//         break;
//     case "ploaie":
//         console.log("Zi cu ploaie!");
//         break;
//     case "ceata":
//         console.log("Zi cu ceata!");
//         break;
//     default:
//         console.log("Aceasta optiune nu se regaseste!");
// }

//For 20 - 40
// for(let i = 20; i<=40;i++){
//     let className = i % 2 == 0 ? "par" : "impar";
//     document.body.innerHTML += `<div class="border ${className}">${i}</div>`;
// }

// let i = 20;

// while(i<=40){
//     let className = i % 2 == 0 ? "par" : "impar";
//     document.body.innerHTML += `<div class="border ${className}">${i}</div>`;
//     i++;
// }

const numbers = [25, 178, 45, 8, 1, 0, 9, 54, 4];

for(let i = 0; i < numbers.length; i++){
    if((numbers[i] % 2) == 0 && (i % 2 == 0)) 
        console.log(numbers[i]);
}
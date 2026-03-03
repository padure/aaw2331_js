// Exemplul 1 
let str = "Non eum quia numquam quibusdam occaecati esse qui ut rerum. Ratione ut illo ut et numquam quis et. Porro Qui soluta. Recusandae a ex cum. Temporibus et cupiditate nam voluptatem delectus QUI exercitationem omnis."
const validare = /\bqui\b/gi;

// console.log( str.match(validare) );

// Exemplul 2
let text = "martie 3";
// const validareLuna = /^Martie$/gi;
const validareLuna = /\d{2}/gi;

// console.log( validareLuna.test(text) );

// Exemplul 3
let tel = "+37369110022";
const regExpTel = /^\+373[67]\d{7}$/gi

// console.log(regExpTel.test(tel));

// Exemplul 4
let content = "Accusamus Porro impedit aperiam optio quisquam porro."
const textReplace = /porro/gi

const textModificat = content.replace(textReplace, "lorem");

console.log(textModificat);

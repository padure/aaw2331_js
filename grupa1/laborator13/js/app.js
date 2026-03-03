const valuta = /\bRON\b/gi;
const text = "Am schimbat RON în euro, apoi am retras RON de la bancomat, am plătit cu RON la magazin și am economisit fiecare ron rămas RONNY.";

const textModificat = text.replace(valuta, "EUR");

// console.log(textModificat);

let numar = "+37368453651";
const regTel = /^\+373[67]\d{7}$/gi;

console.log(regTel.test(numar));
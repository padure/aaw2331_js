let suma = Number( prompt("Scrie suma necesara:") );

let valuta = confirm("Selecteaza valuta: USD (Ok) sau EUR (Cancel)?");

let curs = Number( prompt(`Scrie cursul curent:`) );
let total = suma / curs;
let result = valuta 
                ? `Suma finala este: ${total.toFixed(2)} USD`
                : `Suma finala este: ${total.toFixed(2)} EUR`

console.log(result);
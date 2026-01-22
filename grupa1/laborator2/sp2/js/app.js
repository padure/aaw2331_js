let suma = Number( prompt("Scrie suma pentru conversie!", 0) );
let valuta = confirm("selecteaza valuta: USD (Ok) sau EUR (Cancel)?");
let curs = Number( prompt("Scrie care este cursul actual:", 0) );

let total = suma * curs;
//Operator ternar
let rezultat = valuta 
                    ? `Suma finala este: ${total} USD`
                    : `Suma finala este: ${total} EUR`;
alert(rezultat);
console.log(rezultat);
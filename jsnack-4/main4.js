//jsnack4
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,se è dispari inseriscilo nell’array

//aggiungo variabile numeri dispari
let oddNumber = [];

//chiedo di inserire il numero 6 volte
for (let i = 0; i < 6; i++) {
  let number = parseFloat(prompt("Inserisci il numero"));

  // se è dispari inserisci
  if (number % 2 !== 0) {
    oddNumber.push(number);
  }
}

console.log("Numeri dispari inseriti:", oddNumber);

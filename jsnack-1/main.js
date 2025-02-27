// jsnack1
//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

// primo numero da inserire
const num1 = parseFloat(prompt("Inserisci il primo numero"));
console.log(num1);
//secondo numero da inserire
const num2 = parseFloat(prompt("Inserisci il secondo numero"));
console.log(num2);

// vedere quale numero è maggiore

if (num1 > num2) {
  console.log("Il numero maggiore è: " + num1);
} else if (num2 > num1) {
  console.log("Il numero maggiore è: " + num2);
} else {
  console.log("I numeri sono uguali.");
}

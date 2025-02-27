//jsnack3
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

//aggiungo variabile della somma
let add = 0;

//inserisco il numero 10 volte
for (let i = 0; i < 10; i++) {
  let number = parseFloat(prompt("Inserisci un numero"));
  //faccio la somma dei numeri
  if (number) {
    add += number;
  }
}
// totale della somma
console.log("La somma di tutti i numeri inseriti è: " + add);

//jsnack2
//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

// inserisco prima parola
const firstWord = prompt("Inserisci la prima parola");
console.log(firstWord);
// inserisco seconda parola
const secondWord = prompt("Inserisci la seconda parola");
console.log(secondWord);

//  vedere quale parola è più corta e più lunga

if (firstWord.length < secondWord.length) {
  console.log("La parola più corta è= " + firstWord);
  console.log("La parola più lunga è= " + secondWord);
} else if (secondWord.length < firstWord.length) {
  console.log("La parola più lunga è= " + firstWord);
  console.log("La parola più corta è= " + secondWord);
} else {
  console.log("Le parole sono lunghe uguali= " + firstWord + secondWord);
}

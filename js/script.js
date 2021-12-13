const documentHtml = document.querySelector(".output");
// creo la lista di email che avranno accesso al programma
const emailAccess = ["mario.300@gmail.com", "giovanni.300@gmail.com", "paolo.300@gmail.com", "mimmo.300@gmail.com", "gianni.300@gmail.com", ];

// creo una variabile con valore false che in caso di accesso approvato diventa true
let controllo = false;

// Chiedo tramite un pormpt all'utente la sua mail
let userEmail = prompt("Inserisci la tua email");

// Utilizzo un ciclo for per verificare se il nome inserito è presente nella emailAccess
for (let i = 0; i < emailAccess.length; i++) {
  if (userEmail.toLowerCase() === emailAccess[i].toLowerCase()) {
    controllo = true;
  }
}
// scrivo in console l'esito del controllo
console.log(controllo);

// se il controllo è true approvo l'accesso con un messaggio di benvenuto
// se il controllo è false progo all'utente di controllare la sua email
if (controllo) {
  documentHtml.innerHTML = `Benvenuto ${userEmail}, <br/>ha eseguito correttamente l'accesso!`;
} else {
  documentHtml.innerHTML = `Ci dispiace! ${userEmail}, <br/>la sua email non è presente nella lista, la preghiamo di riprovare.`;
}


// ----------------------------------------------------------------------------------
const document2Html = document.querySelector(".output2");

// assegno a me e al pc un numero casuale da 1 a 6
const myNumber = Math.floor(Math.random() * 6 + 1);
const cpuNumber = Math.floor(Math.random() * 6 + 1);

// scrivo in console i due numeri assegnati
console.log(myNumber);
console.log(cpuNumber);

// con un if metto a confronto i due numeri e stampo il risultato in html
if (myNumber > cpuNumber) {
    document2Html.innerHTML = `con il numero ${myNumber} contro il numero ${cpuNumber} vincono gli umani`;
} else if (myNumber < cpuNumber){
    document2Html.innerHTML = `con il numero ${cpuNumber} contro il numero ${myNumber} vincono i computer e gli umani sono stati finalmente sconfitti`;
} else if (myNumber === cpuNumber){
    document2Html.innerHTML = `quando nessuno se lo aspettava si ottiene un pareggio per ${myNumber} a ${cpuNumber}`;
}
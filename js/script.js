// Chiedi all’utente il suo nome,poi chiedi il suo cognome,poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito21

// const userName = prompt ("Come ti chiami?");
// console.log(userName, typeof userName);

// const lastName = prompt ("Quale è il tuo cognome?");
// console.log(lastName, typeof lastName);

// const prefColor = prompt ("ed il tuo colore preferito?");
// console.log(prefColor, typeof prefColor);

// const number = 21;
// console.log(number, typeof number);

// const password = userName + lastName + prefColor + number;
// console.log(password, typeof password);

// const result = "La tua password è";
// console.log(result, typeof result);

// document.getElementById("passgen").innerHTML= `${result} ${password}`;



// //numero invariato da aggiungere
// const numeroInvariato = 21;

// //chiedere all'utente nome,cognome e colore preferito

// const nomeUtente = prompt("Come ti chiami?");
// const cognomeUtente = prompt("Quale è il tuo cognome?");
// const colorePreferito = prompt("Ed il tuo colore preferito?");
// console.log(nomeUtente, cognomeUtente, colorePreferito);

// //generare password seguita dal numero 21
// const password = nomeUtente + cognomeUtente + colorePreferito + numeroInvariato

// //prendere contenuto dall'html h3
// let html = document.getElementById("passgen").innerHTML

// document.getElementById("passgen").innerHTML = "La tua password è" + ` ${password}`;

let nome = prompt("Scrivi il tuo nome qui!")
let cognome = prompt("Scrivi il tuo cognome qui!")
let colorePreferito = prompt("Scrivi il tuo colore preferito qui!")

// controlla se l'input dell'utente è una stringa e contiene solo lettere
while (!/^[a-zA-Z]+$/.test(nome) || !/^[a-zA-Z]+$/.test(cognome) || !/^[a-zA-Z]+$/.test(colorePreferito)) {
    alert("Errore: inserisci solo lettere come nome, cognome e colore preferito.");
    nome = prompt("Scrivi il tuo nome qui!")
    cognome = prompt("Scrivi il tuo cognome qui!")
    colorePreferito = prompt("Scrivi il tuo colore preferito qui!")
}

// se l'input è corretto, genera la password
let pass = nome + cognome + colorePreferito
const numb = 21
document.getElementById("passgen").innerHTML = `${pass}${numb}`;


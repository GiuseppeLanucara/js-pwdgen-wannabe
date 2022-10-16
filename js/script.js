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


const nome = prompt("Dimmi il tuo nome");
const cognome = prompt ("Dimmi il tuo cognome")
const colore = prompt ("Dimmi il tuo colore preferito")
console.log(nome, cognome, colore);

const numero = 21
console.log(numero, typeof(numero));

const password = nome + cognome + colore + numero;
console.log(password);

document.getElementById("passgen").innerHTML = "La tua password è" + ` ${password}`
console.log();
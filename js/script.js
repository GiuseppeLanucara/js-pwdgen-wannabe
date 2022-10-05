// Chiedi all’utente il suo nome,poi chiedi il suo cognome,poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito21

const userName = prompt ("Come ti chiami?");
console.log(userName, typeof userName);

const lastName = prompt ("Quale è il tuo cognome?");
console.log(lastName, typeof lastName);

const prefColor = prompt ("ed il tuo colore preferito?");
console.log(prefColor, typeof prefColor);

const number = 21;
console.log(number, typeof number);

const password = userName + lastName + prefColor + number;
console.log(password, typeof password);

const result = "La tua password è";
console.log(result, typeof result);

document.getElementById("passgen").innerHTML= `${result} ${password}`;

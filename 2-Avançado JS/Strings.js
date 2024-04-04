//
// COMO ENCONTRAR UMA DETERMINADA PALAVRA/CARACTER
//
let frase = "Eu sou um cara legal!";

// includes("!") para encontrar um caracter ou uma palavra
console.log(frase.toLowerCase().includes("!")); // true ou false

//
// COMO DEIXAR O TEXTO MAIUSCULO OU MINUSCULO
//
console.log(frase.toLowerCase()); // minúsculo
console.log(frase.toUpperCase()); // MAIÚSCULO

//
// COMO SEPARAR E/OU JUNTAR UM CONJUNTO DE PALAVRAS
//

// split(" ") para separar as palavras da frase num array
// join("-") para juntar dados de um array numa string
console.log(frase.split(" ").join("-"));

//
// COMO SUBSTITUIR UMA STRING POR OUTRA
//
console.log(frase.toLowerCase().replace("eu sou", "Guilherme é"));

let value = 1234.556;
console.log(value.toFixed(2).replace(".", ",")); // método antigo antes da API -> Intl

//
// COMO RECORTAR UMA PARTE DE UMA STRING
//

const chars =
  "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789?!@&*()[]";

let password = "";

for (let i = 0; i < 8; i++) {
  // Floor, tira a virgula, apenas numeros inteiros
  // Math.random, pega uma posição aleatória entre todos os itens (chars.lenght)
  const randomNumber = Math.floor(Math.random() * chars.length);
  // Adiciona a 'password' um digito, que será recortado usando substring
  // substring(posição inicial, posição que será recortada), no exemplo abaixo
  // Será pego a posição 1 e recortar o proximo digito
  // Caso o randomNumber trave em 'w', o digito recortado será 'x'
  password += chars.substring(randomNumber, randomNumber + 1);
}

console.log(password);

// Type casting = Conversão pelo usuário
// Type coersion = Conversão "coercitiva" pela VM

console.log("2" + 2); // forçou o 2 em string, Coersion
console.log(Number("2") + 2); // O usuário força o string para number, Casting

// NUMBER <-> STRING
console.log(Number("2"));
console.log(String(2));

// NUMBER, STRING <-> BOOLEAN
console.log(Boolean("")); // false
console.log(Boolean("abc")); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true

// STRING <-> DATE
console.log(new Date("04/30/2022 12:00"));
console.log(new Date("2022-04-30 12:00"));
console.log(new Date("2022 04 30 12:00"));

console.log(new Date().toISOString());

// STRING <-> ARRAY
let nome = "Guilherme";

console.log(nome[0]); // transformar string em array

for (const letra of nome) {
  console.log(letra);
  nome += letra;
}
console.log(nome);
console.log(nome.length);

let values = ["Guilherme", "Carvalho"];
console.log(values.join(" ")); // converter array para string

values = "Guilherme Carvalho";
console.log(values.split(" ")); // transformar string com espaço por array, decidindo qual vai ser o separador

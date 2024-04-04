const numbers = [10, 18, 1, 15];

let res = [];

// Filtrar valor dependendo da verificação
for (const n of numbers) {
  if (n > 10) {
    console.log(n);
    res.push(n); // Adicionar os valores em um outro array
  }
}
console.log(res);

// Outro método para se filtrar, melhor jeito para se usar
let res2 = numbers.filter((n) => n > 10);
console.log(res2);

// Outro exemplo
const people = [
  { nome: "Felipe", genero: "M", idade: 22 },
  { nome: "Paulo", genero: "M", idade: 14 },
  { nome: "Rodrigo", genero: "M", idade: 35 },
  { nome: "Amanda", genero: "F", idade: 20 },
];
// IF maior que 18 anos
const maiorDeIdade = people.filter((p) => p.idade > 18);
console.log(maiorDeIdade);

// IF maior que 18 anos e gênero masculino
const maiorDeIdade2 = people.filter((p) => p.idade > 18 && p.genero === "M");
console.log(maiorDeIdade2);

// IF entre 18 a 25 anos e gênero masculino
const maiorDeIdade3 = people.filter(
  (p) => p.idade >= 18 && p.idade <= 25 && p.genero === "M"
);
console.log(maiorDeIdade3);

// CONST, não existe a possibilidade de alteração do valor
// const é equivalente a uma "variável local e imutável"
const x = 10; // Uma const precisa obrigatóriamente de um valor inicial
console.log("x: " + x);

{
  console.log("x: " + x);
  x = 20;

  const y = 30; // Dentro do escopo
}

console.log("x: " + x);
console.log("y: " + y); // Não funciona, porque a variável foi definida dentro de um escopo

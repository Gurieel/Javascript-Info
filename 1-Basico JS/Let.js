// LET, é possível uma alteração do valor dentro de um escopo
// let é equivalente a uma "variável local"
let x = 10;
console.log("x: " + x);

{
  console.log("x: " + x);
  x = 20;

  let y = 30; // Dentro do escopo
}

console.log("x: " + x);
console.log("y: " + y); // Não funciona, porque a variável foi definida dentro de um escopo

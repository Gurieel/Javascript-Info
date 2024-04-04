// IF

if (false) {
  console.log("Verdadeiro");
} else {
  // Se não entrar na verificação acima, virá para baixo
  console.log("Falso");
}

const valor = 10;

if (valor >= 10) {
  console.log("É maior ou igual a 10");
} else if (valor > 4 && valor < 6) {
  // Se não entrar na verificação acima, virá para baixo caso se encaixe na segunda verificação
  console.log("É o número 5");
} else if (valor < 10) {
  console.log("É menor que 10");
} else {
  // Retornar a ultima opção ELSE caso não se encaixe em nenhuma das opções acima
  console.log("Outra condição");
}

// IF TERNÁRIO
// variavel = (condição) ? IF : ELSE
let texto = "A";
let ternario;
ternario = texto == "A" ? 10 : 20; // Exemplo
console.log("valor:", ternario);

texto == "A" ? console.log("SE") : console.log("SENAO"); // Exemplo 2 já incluindo uma ação

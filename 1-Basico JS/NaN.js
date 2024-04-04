// NaN - Not a Number
// Erro causado caso ocorra algum calculo que não se refere 100% a número
// Exemplo:
console.log("A" * 1);

// Pode ser usado para fazer uma verificação
var num1 = "A";
var num2 = 0;

// Verificação:
if (isNaN(num1) || isNaN(num2)) {
  console.log("Erro: Um dos valores enviados não é um número.");
} else {
  console.log(num1 * num2);
}

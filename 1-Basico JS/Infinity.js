// Infinity
// Erro causado caso ocorra algum calculo com um resultado infinito
// Exemplo:
console.log(1 / 0);

// Pode ser usado para fazer uma verificação
var num1 = 1;
var num2 = 0; // Número que será usado como divisor, não pode ser 0

// Verificação:
if (num2 == 0) {
  console.log("Erro: O segundo valor enviado não pode ser 0");
} else {
  console.log(num1 / num2);
}

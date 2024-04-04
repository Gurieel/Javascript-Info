function func(values, calc) {
  for (let i = 0; i < values.length; i++) {
    // enquanto houver numeros
    if (calc === mult) values[i] = mult(values[i]); // puxando os valores da função e fazendo o calculo de multiplicação
    if (calc === soma) values[i] = soma(values[i]); // puxando os valores da função e fazendo o calculo de multiplicação
    // values[i] *= values[i]; // n *= n
  }

  return values;
}

const valores = [1, 2, 3, 4, 10];

const mult = (n) => n * n; // definindo uma função apenas para multiplicação
const soma = (n) => n + n; // definindo uma função apenas para soma, callback para chamar essa função dentro da anterior

console.log("Valores Originais: " + valores);
console.log("Multiplicação: " + func(valores, mult));
console.log("Soma: " + func(valores, soma));

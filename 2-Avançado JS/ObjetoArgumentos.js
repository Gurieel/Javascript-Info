// Pegar todos os dados de uma função utilizando "arguments"
// Transformando uma função em um objeto
// Exemplo normal em -> Avançado Js -> Retorno
function sum(n1, n2) {
  let result = 0;

  // argumentos
  // console.log(arguments);

  for (const number of arguments) {
    // console.log(number);
    result += number;
  }

  return result;
}

console.log(sum(1, 1, 3, 10, 4, 1, 3, 4));

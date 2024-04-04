// Qualquer coisa pesquisar outras utilidades do reduce

// callback - Função que é executada em cada valor no array, recebe quatro argumentos:
// acumulator - O valor retornado na última invocação do *callback*, ou o argumento Valor Inicial, se fornecido
// currentValue - O elemento atual que está sendo processado no array
// indice - O índice do elemento atual que está sendo processado no array
// array - O array ao qual a função reduce foi chamada.

// initialValue - Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da função callback.

let values = [1.5, 2, 4, 10];

//
//
// Primeiro exemplo:
//
//

// function callback(acumulator, currentValue, index, array) {
//   console.log(`acumulator`, acumulator); // Valor que vai iniciar a contagem, depende de um return
//   console.log(`currentValue`, currentValue);
//   console.log(`index`, index);
//   console.log(`array`, array);
//   console.log("---");

//   return acumulator + 1; // O +1 é para contar mais um ao proximo valor
// }

// values.reduce(callback, 0); // A segunda opção é para escolher onde iniciar no array

//
//
// Exemplo dois:
//
//

// Somando todos os valores do array
// let sum = values.reduce((total, item) => total + item, 0); // total = acumulator, item = currentValue

// console.log("sum ", sum);

//
//
// Exemplo três:
//
//

// Média total, soma de todos os valores e divido pela quantidade de valores
// Exemplo: (3 + 4 + 5) / 3
// let avg = values.reduce(
//   (total, item, index) => (total + item) / (index + 1), // index + 1 porque o index começa no 0
//   0
// );
// console.log("avg ", avg);

//
//
// Exemplo quatro:
//
//

// Map
// let double = values.map() - Se comporta exatamente igual o de baixo
// let double = values.reduce((total, item) => total.concat(item * 2), []);
// console.log("double ", double);

// Filter
// Ver qual item é maior que 2 e colocar em um novo array
// O item é adicionado, caso ele for maior que 2
let newValues = values.reduce((total, item) => {
  console.log("item", item);
  if (item > 2) {
    total.push(item);
  }

  console.log("total", total);

  return total;
}, []);
console.log("newValues", newValues);

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((n) => n * 2);

// Teste de demora de tempo para rodar o código
var antes = Date.now();

console.log(double);

// Continuação do teste
var duracao = Date.now() - antes;
console.log(`O código demorou ${duracao} ms para rodar.`);

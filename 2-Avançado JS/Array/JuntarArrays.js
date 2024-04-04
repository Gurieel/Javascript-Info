// CONCATENAÇÃO
let set1 = [1, 2, 3, 4, 5];
let set2 = [6, 7, 8, 9, 10];
let set3 = [11, 12, 13, 14, 15];
console.log(typeof (set1 + set2)); // Não é legal, tira a array e se torna uma string
console.log([set1].join(",") + [set2].join(",")); // Mesma situação acima (coersion), converte em string

console.log([set1, set2]); // Cria um novo array com 2 subs arrays dentro, não é utilizável

// Jeito certo de se juntar arrays
console.log(set1.concat(set2).concat(set3)); // Cria um novo array concatenado, somado

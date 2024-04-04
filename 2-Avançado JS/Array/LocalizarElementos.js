let people = ["Guilherme", "Camilly", "Rodrigo", "Sandra", "Eduardo"];
console.log(people);

// 0 -> n
// 5 elementos -> people.length

// Localizar elementos
let index = people.indexOf("Sandra"); // Pegar um determinado elemento e sua posição.
console.log(index);

people.splice(index, 1); // Começar do nome sugerido, remover contando 1, ele mesmo.
console.log(people);

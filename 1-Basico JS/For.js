// for(Variável com condição inicial;
//     Condição para que o for continue executando;
//     Condição de incremento)

//FOR NORMAL
console.log("FOR NORMAL");

const nomes = ["Guilherme", "Camilly", "Rodrigo"];
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// FOR OF
console.log("\n" + "FOR OF");

for (const nome of nomes) {
  // Primeira variável, vai representar o conteudo do elemento em questão
  // Pegando todos os dados da array, funciona enquanto tiver dados na array
  console.log(nome);
}

// FOR IN
console.log("\n" + "FOR IN");
const person = {
  name: "Guilherme",
  age: 22,
};

for (const propriedades in person) {
  console.log(`Propriedades: ${propriedades} - ${person[propriedades]}`);
}

console.log({ propriedade: "valor" }); // O {} indica que é um objeto

// Exemplo melhor:
const pessoa = {
  nome: "Guriel",
  idade: 22,
  cpf: "063.438.921-17",

  // Objeto dentro de outro objeto
  endereco: {
    estado: "DF",
    cidade: "Sobradinho",
    bairro: "Região dos lagos",
    complemento: "Cond rk, conjunto antares, quadra E, casa 5",
  },
};

console.log(pessoa);
console.log(JSON.stringify(pessoa));

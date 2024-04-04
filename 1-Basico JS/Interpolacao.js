let nome, idade, endereco;

nome = "Guriel";
idade = 22;
endereco = {
  condominio: "RK",
  conjunto: "Antares",
  quadra: "E",
  casa: "5",
};

// Concatenação (forma antiga)
console.log(nome + " tem " + idade + " anos.");

// Interpolação
console.log(`${nome} tem ${idade} anos.`);

// Interpolação com objeto
console.log(
  `${nome} tem ${idade} anos e mora em
   Condomínio ${endereco.condominio}
   Conjunto: ${endereco.conjunto}
   Quadra: ${endereco.quadra}
   Casa: ${endereco.casa}`
);

// Interpolação com objeto, utilizando JSON
console.log(`${nome} tem ${idade} anos e mora em ${JSON.stringify(endereco)}`);

// Interpolação com objeto, utilizando JSON e Replace
console.log(
  `${nome} tem ${idade} anos e mora em ${JSON.stringify(endereco)
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replaceAll('"', "")
    .replaceAll(":", " ")
    .replaceAll(",", ", ")}`
);

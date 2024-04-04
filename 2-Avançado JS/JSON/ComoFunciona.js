// JavaScript Object Notation (JSON) é um formato baseado em texto padrão para representar
// dados estruturados com base na sintaxe do objeto JavaScript.

// É normalmente usado para transmitir dados em aplicativos da Web (por exemplo, enviar
// alguns dados do servidor para o cliente, para que possam ser exibidos em uma página
// da Web ou vice-versa).

// JSON é um formato de dados baseado em texto seuindo a sintaxe do objeto JavaScript,
// que foi popularizada por Douglas Crockford.

// Para enviar a memória do meu programa para outro é necessário um formato de informações
// Enviando dados para outra linguagem: JavaScript > JSON > PHP
//                                      stringify > JSON > parse
// Recebendo dados de outra linguagem: JavaScript < JSON < PHP
//                                     parse < JSON < stringify

// JSON.stringify(obj) - Converte para string
// JSON.parse(obj) - Converte para objeto
const person = {
  name: "Guilherme carvalho",
  idade: 22,
  endereco: {
    Estado: "DF",
    Cidade: "Brasilia",
    Bairro: "Região dos lagos",
    Complemento: "Cond rk, conj Antares, Q E, C 5",
  },
};

// Transformar objeto em string
const personString = JSON.stringify(person);
console.log(personString);
console.log(typeof personString);

// Transformar string em objeto
const personObjeto = JSON.parse(personString);
console.log(personObjeto);
console.log(typeof personObjeto);

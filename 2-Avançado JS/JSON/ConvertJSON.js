// JSON - JavaScript Object Notation
// JSON.stringify()
// JSON.parse()

// Pegar o objeto e colocar num formato string JSON
const people = [
  {
    id: 1,
    name: "Guilherme",
    lastName: "Carvalho",
    bornDate: new Date(2001, 5, 11),
    address: {
      city: "Brasilia - DF",
    },
  },
  {
    id: 2,
    name: "Camilly",
    lastName: "Cruz",
    bornDate: new Date(2004, 1, 28),
    address: {
      city: "Brasilia - DF",
    },
  },
];

console.log(JSON.stringify(people)); // Conversão de objeto para uma String JSON

const string =
  '[{"id":1,"name":"Guilherme","lastName":"Carvalho","bornDate":"2001-06-11T03:00:00.000Z","address":{"city":"Brasilia - DF"}},{"id":2,"name":"Camilly","lastName":"Cruz","bornDate":"2004-01-28T03:00:00.000Z","address":{"city":"Brasilia - DF"}}]';

console.log(JSON.parse(string)); // Conversão de String JSON para um objeto

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((n) => n * 2);
console.log(double);

const elevado = numbers.map((n) => Math.pow(n, 2)); // n elevado a 2
console.log(elevado);

const fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121]; // Temperaturas em fahrenheit
const celcius = fahrenheit.map((temp) => Math.round((temp - 32) / 1.8));
console.log(celcius);

const people = [
  {
    nome: "Guilherme",
    idade: 22,
  },
  {
    nome: "camiLLy",
    idade: 19,
  },
  {
    nome: "rodrigO",
    idade: 15,
  },
];
const peopleNormalized = people.map((p) => p.nome.toUpperCase());
console.log(peopleNormalized);

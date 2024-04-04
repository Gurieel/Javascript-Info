let value = 1234.493;

// toFixed();
console.log(value.toFixed(1)); // Decidir quantidade de casas decimais que deseja fixar, arredondando

// Math.ceil();
console.log(Math.ceil(value)); // Vai aredondar para números inteiros, arredonda para cima

// Math.floor();
console.log(Math.floor(value)); // Vai aredondar para números inteiros, arredonda para baixo

// Math.round();
console.log(Math.round(value)); // Arredonda para inteiro, para baixo ou para cima, depende dos decimais

// Intl.NumberFormat()
// Na utilização, pesquisar sobre essa função no google
console.log(new Intl.NumberFormat("pt-BR").format(value)); // Formata o número para unidades específicas

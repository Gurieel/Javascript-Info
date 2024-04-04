function mult2(num) {
  num *= num; // multiplica o número informado na função por sí mesmo
  return num; // define a resposta da função
}

let numVal = 10;
console.log(mult(numVal));
console.log(numVal); // Continua o valor inicial

////////////////////////////////////////////////////////////////////////

// Fazendo o mesmo sistema mas multiplicando objetos
function multObj(obj) {
  obj.value *= obj.value;
  return obj;
}

const numObj = { value: 10 };
console.log(multObj(numObj));
// tudo que for alterado em um objeto é passado como atualização
console.log(numObj); // É alterada fixamente após a multiplicação anterior

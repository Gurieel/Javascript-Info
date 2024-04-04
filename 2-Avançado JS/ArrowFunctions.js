// Este tipo de função são as mais interessantes para se utilizar no código

// Função regular
function mult(n) {
  n *= n; // linha util da função
  return n;
}

// Arrow function
multArrow = (n) => {
  n *= n; // linha util da função
  return n;
};

// Arrow function, atribuindo a const (Forma utilizada)
const multArrowConst = (n) => {
  n *= n; // linha util da função
  return n;
};

// Arrow function, atribuindo a const (Forma utilizada) e simplificada (quando a função faz algo simples)
const multArrowSimple = (n) => (n *= n); // Se colocar as chaves é obrigatório colocar o return

console.log(mult(10));
console.log(multArrow(10));
console.log(multArrowConst(10));
console.log(multArrowSimple(10));

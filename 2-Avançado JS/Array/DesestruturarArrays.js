// DESESTRUTURAÇÃO
let set = [1, 2, 3, 4, 5];

let [n1, n2] = set; //Defini os 2 itens iniciais de um array em uma variável
console.log("n1 =", n1);
console.log("n2 =", n2);

function myFunction() {
  //Função que retorna 2 valores em um array
  const x = 10;
  const y = 400;
  return [x, y];
}
const [x, y] = myFunction();
console.log("x =", x);
console.log("y =", y);

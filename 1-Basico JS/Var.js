// VAR, é possível uma alteração do valor da variável
// var é equivalente a uma "variável global"
var x = 10;
console.log("x:", x);

{
  console.log("x:", x);
  x = 20;

  var y = 30;
}

console.log("x:", x);
console.log("y:", y);

// Bibliotecas para mexer com DATE com maior facilidade
// momentjs.com
// date-fns.org

console.log(Date()); // Data e hora corrente => new Date()
console.log(new Date()); // Data e hora corrente
console.log(new Date(2022, 3, 22)); // Data específica e hora corrente
console.log(new Date(2022, 3, 22, 10, 20, 59)); // Data específica e hora específica
// Atenção: 0 = janeiro, então no Js os meses vão até o 11

// Como se declara uma variavel DATE
// new Date(year, month, day, hours, minutes, seconds, milliseconds); // valores pré-definidos

// Principais métodos que se pode usar:

// getDay() e setDay() - Retorna/define o dia da semana (0-6)
// getDate() e setDate() - Retorna/define o dia do mês (1-31)
// getMounth() e setMounth() - Retorna/define o mês (0-11)
// getFullYear() e setFullYear() - Retorna/define o ano
// getHours() e setHours() - Retorna/define a hora (0-23)
// getMinutes() e setMinutes() - Retorna/define os minutos (0-59)
// getSeconds() e setSeconds() - Retorna/define os segundos (0-59)
// parse() - Recupera uma data a partir de uma string
// toString() - Retorna uma data como string
// toISOString() - Retorna uma data como string no padrão ISO
// toTimeString() - Retorna a hora apenas

//Exemplo:
const myDate = new Date(2001, 4, 11, 6, 45, 0); // Formato normal
const myDateString = new Date("May 11 2001 06:45:00"); // Formato String
const myDateISO = new Date("2001-05-11T09:45:00.000Z"); // Formato ISO (Fica dentro do Time zone, no brasil são 3 horas a mais)

console.log(myDate + "\n" + myDateString + "\n" + myDateISO); // Sempre vai mostrar no método padrão toString()
console.log(myDate.toISOString()); // Utilizando toISOString(), melhor método para se trabalhar
console.log("dia", myDate.getDate()); // Puxar informações individuais
console.log("mês", myDate.getMonth() + 1); // Puxar informações individuais (Lembrando que começa no 0, então acrescente +1)
console.log("ano", myDate.getFullYear()); // Puxar informações individuais

// Calcular a idade
const today = new Date();

console.log("idade", today.getFullYear() - myDate.getFullYear());

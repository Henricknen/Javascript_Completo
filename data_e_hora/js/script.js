const div_data = document.getElementById("div_data"); 
const data = new Date();        // constante data instançiando um objeto da classe 'Date'

let dia = data.getDate();
dia = dia < 10 ? "0" + dia : dia;       // condição se 'dia' for menor que 10 variável dia reçebe 0 + o dia

let mes = data.getMonth() + 1;
mes = mes < 10 ? "0" + mes : mes;

let ano = data.getFullYear();

const data_r = dia + "/" + mes + "/" + ano;       // obtendo o dia do mês
div_data.innerHTML = data_r;        // imprime na tela o dia 

// ---------------------------------------------------------------------------

console.log(data);      // 'data' retorna a todas informações do 'data'
console.log(data.toDateString());
console.log(`Mês: ${data.getDate()}`);

// 'Métodos' utilizadas para geração de data e hora
// getDate() = Dia do mês
// getDay() = Dia da semana (número)
// getFullYear() = Ano com 4 dígitos
// getHours() = Horas
// getMilliseconds() = Milisecondos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (milisegundo desde de 1 de janeiro de 1970, 00:00:00 UTC
// get.now() = Timestamp (milisegundo desde de 1 de janeiro de 1970, 00:00:00 UTC
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define o dia do mês para data
// setMonth() = Define um mês para data
// setFullYear() = Define um ano para data
// setHours() = Define horas
// setMinutes() = Define minutos
// setSeconds() = Define segundos
// setMiliseconds() = Define mlisegundos
// setDateString() = Retorna somente a data
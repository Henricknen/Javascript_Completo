const valores = [20, 13, 08];       // array de 'valores'
const it_valores = valores[Symbol.iterator]();      // 'iterador' do array 'valores'

const profissional = "Luis Henrique";
const it_profissional = profissional[Symbol.iterator]();      // iterador da string 'profissional'

console.log(it_valores.next());          // 'next()' indica o primeiro valor do array
console.log(it_valores.next());          // 'next()' para o próximo valor
console.log(it_valores.next());          // próximo valor
console.log(it_valores.next());          // 'undefined', pois não há mais valores
console.log(it_valores.next().value);      // 'value' retorna o valor atual 
console.log(it_valores.next().value);
console.log(it_valores.next().value);
console.log(it_valores.next().value);

console.log(profissional);               // imprime o nome 'Luis Henrique'
console.log(it_profissional.next());      // 'L' - primeira letra
console.log(it_profissional.next());      // 'u' - segunda letra
console.log(it_profissional.next());      // 'i' - terceira letra
console.log(it_profissional.next());      // 's' - quarta letra
console.log(it_profissional.next());      // ' ' - espaço
console.log(it_profissional.next());      // 'H' - letra 'H'
console.log(it_profissional.next());      // 'e' - letra 'e'
console.log(it_profissional.next());      // 'n' - letra 'n'
console.log(it_profissional.next());      // 'r' - letra 'r'
console.log(it_profissional.next());      // 'i' - letra 'i'
console.log(it_profissional.next());      // 'q' - letra 'q'
console.log(it_profissional.next());      // 'u' - letra 'u'
console.log(it_profissional.next());      // 'e' - letra 'e'
console.log(it_profissional.next());      // 'done: true' - terminou a string, agora retorna 'done: true'

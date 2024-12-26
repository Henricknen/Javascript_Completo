const caixa = document.querySelector("#caixa");      // pegando o elemento  pelo id 'caixa'

let mapa = new Map();        // 'new' declara está variável 'mapa' do tipo 'map'

mapa.set("repositorio", "javascript");        // método 'set' adiçiona elementos dentro da coleção
mapa.set("Profissional", "Luis Henrique S F");       // cada elemento do 'map' possui um conjunto de 'chave' "Profissional" e 'valor' "Luis Henrique S F"

mapa.delete("repositorio");      // deletando elemento da chave "repositorio"

console.log(mapa);

// ------------------------------------------------------------------------------------------------------

let pes = "repositorio";
let res = "";
if(mapa.has(pes)) {       // método 'has' verifica se  a 'chave' existe ou não na coleção
    res = "A chave que está na coleção é " + mapa.get(pes);      // 'mapa.get(pes)' contém a chave
} else {
    res = "Não existe etá chave na coleção";
}

res += "<br/> O tamanho da coleção é " + mapa.size      // 'mapa.size' pega o tamanho
caixa.innerHTML = res

// ------------------------------------------------------------------------------------------------------

mapa.forEach((el)=> {       // percorrendo todos elementos da coleção
    console.log(el);
});

caixa.innerHTML = mapa.get("Profissional");     // adiçionado na 'caixa' de 'index.html' o valor da chave  'Profissional'
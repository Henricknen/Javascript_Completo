function mudar_texto() {        // função manipula o 'DOM'
    let d1 = document.getElementById("d1");     // pegando elemento de 'id' d1
    let d2 = document.getElementById("d2");
    d1.innerHTML = "FullStack";
    d2.innerHTML = "FullStack";
}


function soma() {       // função tradiçional 'parametrizada' utiliza '()' onde é inserido parâmentros    
    let n1 = 35;
    let n2 = 65;
    let total = n1 + n2;
    console.log(total);
}

for(let i = 0; i < 10; i++) {       // colocando a chamada dentro de um 'loop'
    soma();        // soma é a 'declaração' e () é a'chamada' da função
}
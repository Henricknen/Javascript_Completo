class Carro {
    constructor(pnome, pvelmax) {
        this.nome = pnome;
        this.velmax = pvelmax;
    }

    getNome() {
        return this.nome;
    }

    getVelMax() {
        return this.velmax;
    }
}

let carros = [];        // array carros iniçiando vazio

const btn_add = document.querySelector("#btn_add");         // selecionando os elementos do DOM e atribuindo na variável 'btn_add'
const res = document.querySelector(".res");

const addCarros = () => {       // função para adicionar o novo carro ao array e mostrar na tela
    res.innerHTML = "";     // limpa o conteúdo digitado anteriormente

    carros.forEach(c => {    // 'forEach' itera sobre o array de carros e cria um div para cada carro
        const div = document.createElement("div");      // cria uma nova div para cada carro
        div.setAttribute("class", "carro");         // adiçionando 'classe' carro
        div.innerHTML = `Nome: ${c.getNome()}<br/>Velocidade Máxima: ${c.getVelMax()}`;
        res.appendChild(div);       // adicionando a div ao elemento 'res' no DOM
    });
};

btn_add.addEventListener("click", () => {       // adicionando um 'evento de clique' em btn_add para adicionar um novo carro
    const nome = document.querySelector("#f_nome").value;
    const velmax = document.querySelector("#f_velmax").value;

    if (nome && velmax) {           // verificando se os campos não estão vazios
        const novoCarro = new Carro(nome, parseInt(velmax));        // criando um novo objeto Carro
        carros.push(novoCarro);     // adicionando o carro ao array
        addCarros();        // chamando a função para atualizar o DOM com os carros

        document.querySelector("#f_nome").value = "";        // limpando os campos de input
        document.querySelector("#f_velmax").value = "";

        document.querySelector("#f_nome").focus();        // coloca o foco no campo de input nome para inserir o próximo carro
    }
});

const div_data = document.getElementById("div_data");       // apontando para varios elemento html com base no seu 'id'
const div_relogio = document.getElementById("div_relogio");
const btn_ativar = document.getElementById("btn_ativar");
const btn_parar = document.getElementById("btn_parar");
const tmp_alarme = document.getElementById("tmp_alarme");
const hora_alarme = document.getElementById("hora_alarme");
const timer = document.getElementById("timer");

const som_alarme = new Audio("som/alarme.mp3");        // apontando para o arquivo de 'audio'
som_alarme.loop = -1;        // repetição do toque de alarme infinitamente '-1'

let td_atual = null;     // variáveis
let ts_alarme = null;
let alarme_ativado = false;
let alarme_tocando = false;

btn_ativar.addEventListener("click", ()=> {     // adiçionando evento de click em 'btn_ativar'
    td_atual = Date.now();      // pegando o 'timestamp' atual utilizando Date.now
    ts_alarme = td_atual + (tmp_alarme.value * 1000);
    alarme_ativado = true;
    const dt_alarme = new Date(ts_alarme);      // criando uma 'nova data' e passando o 'timestamp' do alarme para a mesma
    hora_alarme.innerHTML = "Hora do Alarme:" + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds();     // obtendo a hora do alarme
});

btn_parar.addEventListener("click", ()=> {
    alarme_ativado = false;
    alarme_tocando = false;
    hora_alarme.innerHTML = "Hora do Alarme:";
    tmp_alarme.value = 0;
    timer.classList.remove("alarme");
    som_alarme.pause();
    som_alarme.currentTime = 0;

});

const data = new Date();     // constante 'data' instançiando um objeto data da classe Date

let dia = data.getDate();
dia = dia < 10 ? "0" + dia: dia;

let mes = data.getMonth();
mes = mes < 10 ? "0" + mes: mes;

const data_r = dia + "/" + mes + "/" + data.getFullYear();
div_data.innerHTML = data_r;

const relogio=()=> {
    const data = new Date();     // data completa
    let hora = data.getHours();      // hora da data
    hora = hora < 10 ? "0" + hora: hora;

    let minutos = data.getMinutes();      // minutos da data
    minutos = minutos < 10 ? "0" + minutos: minutos;

    let segundos = data.getSeconds();      // segundos da data
    segundos = segundos < 10 ? "0" + segundos: segundos;

    const hora_completa = hora +":" + minutos+ ":" + segundos;
    div_relogio.innerHTML = hora_completa;       // atualizando o valor da 'div_relogio'

    if(alarme_ativado && !alarme_tocando) {     // controle do alarme
        if(data.getTime() >= ts_alarme) {
            alarme_tocando = true;
            som_alarme.play();
            timer.classList.add("alarme");
        }
    }

    
}

const intervalo = setInterval(relogio,1000);       // função 'setInterval' chama a função 'relogio' a cada 1 segundo
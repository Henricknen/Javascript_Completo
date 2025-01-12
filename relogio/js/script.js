const div_relogio = document.getElementById("div_relogio");     // pegando elemento de id 'div_relogio'

const data = new Date();

const relogio =()=> {       // função responsável por atualizar o valor da div_relógio a cada segundo
    const data = new Date();
    let hora = data.getHours();     // pegando a hora da data atual
    hora = hora < 10 ? "0" + hora:hora;
    let minuto = data.getMinutes();     // pegando os minutos
    minuto = minuto < 10 ? "0" + minuto:minuto;
    let segundo = data.getSeconds();        // pegando os segundos
    segundo = segundo < 10 ? "0" + segundo:segundo;
    const hora_completa = hora + ":" + minuto + ":" + segundo;      // formatando a hora e atribuindo a variável 'hora_completa'
    div_relogio.innerHTML = hora_completa;      // atualizando o valor da 'div_relogio' utilizando 'hora_completa'
}

const intervalo = setInterval(relogio, 1000);       // função 'setInterval' chama a função 'relogio' a cada segundo
relogio();